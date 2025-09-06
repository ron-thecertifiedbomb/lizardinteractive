import React, { useEffect, useState } from "react";
import { LizardDiv } from "../layout";
import { LizardText } from "../LizardText";

/**
 * LizardWeather
 * - Free: uses Open-Meteo geocoding and forecast APIs (no API key)
 * - Features: city search, geolocation fallback, current weather, 3-day forecast
 */

type GeoResult = {
    name: string;
    country?: string;
    latitude: number;
    longitude: number;
    admin1?: string;
};

type CurrentWeather = {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
};

type DailyForecast = {
    date: string;
    tempMax: number;
    tempMin: number;
    weathercode: number;
};

export function LizardWeather({ className = "" }: { className?: string }) {
    const [query, setQuery] = useState<string>("");
    const [location, setLocation] = useState<GeoResult | null>(null);
    const [current, setCurrent] = useState<CurrentWeather | null>(null);
    const [daily, setDaily] = useState<DailyForecast[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    // Weather code -> emoji + label (simple mapping)
    const weatherCodeToEmojiLabel = (code: number) => {
        // Based on Open-Meteo / WMO weather codes
        if (code === 0) return { emoji: "☀️", label: "Clear" };
        if (code === 1 || code === 2) return { emoji: "🌤️", label: "Partly Cloudy" };
        if (code === 3) return { emoji: "☁️", label: "Overcast" };
        if (code >= 45 && code <= 48) return { emoji: "🌫️", label: "Fog" };
        if (code >= 51 && code <= 57) return { emoji: "🌦️", label: "Drizzle" };
        if (code >= 61 && code <= 67) return { emoji: "🌧️", label: "Rain" };
        if (code >= 71 && code <= 77) return { emoji: "🌨️", label: "Snow" };
        if (code >= 80 && code <= 82) return { emoji: "⛈️", label: "Rain Showers" };
        if (code >= 85 && code <= 86) return { emoji: "❄️", label: "Snow Showers" };
        if (code >= 95 && code <= 99) return { emoji: "⛈️", label: "Thunderstorm" };
        return { emoji: "🌈", label: "Unknown" };
    };

    // Format date like "Mon 06"
    const formatDate = (iso: string) => {
        try {
            const d = new Date(iso);
            return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric" });
        } catch {
            return iso;
        }
    };

    // Fetch weather by lat/lon
    const fetchWeather = async (lat: number, lon: number, placeName?: string) => {
        setLoading(true);
        setError("");
        setCurrent(null);
        setDaily([]);
        try {
            // build open-meteo endpoint - current + daily forecast (3 days)
            const url = new URL("https://api.open-meteo.com/v1/forecast");
            url.searchParams.set("latitude", String(lat));
            url.searchParams.set("longitude", String(lon));
            url.searchParams.set("current_weather", "true");
            url.searchParams.set("timezone", "auto");
            // daily fields: max/min temp and weather code
            url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,weathercode");
            // ask for 3-day forecast by using start_date and end_date
            const today = new Date();
            const end = new Date(today);
            end.setDate(today.getDate() + 3);
            url.searchParams.set("start_date", today.toISOString().slice(0, 10));
            url.searchParams.set("end_date", end.toISOString().slice(0, 10));

            const res = await fetch(url.toString());
            if (!res.ok) throw new Error("Weather API error");
            const data = await res.json();

            // current weather
            if (data.current_weather) {
                const cw: CurrentWeather = {
                    temperature: data.current_weather.temperature,
                    windspeed: data.current_weather.windspeed,
                    winddirection: data.current_weather.winddirection,
                    weathercode: data.current_weather.weathercode,
                    time: data.current_weather.time,
                };
                setCurrent(cw);
            }

            // daily forecast arrays
            if (data.daily) {
                const dates: string[] = data.daily.time || [];
                const maxes: number[] = data.daily.temperature_2m_max || [];
                const mins: number[] = data.daily.temperature_2m_min || [];
                const codes: number[] = data.daily.weathercode || [];

                const combined: DailyForecast[] = dates.map((d, i) => ({
                    date: d,
                    tempMax: maxes[i],
                    tempMin: mins[i],
                    weathercode: codes[i],
                }));
                setDaily(combined);
            }

            if (placeName) {
                setLocation({
                    name: placeName,
                    latitude: lat,
                    longitude: lon,
                });
            } else {
                setLocation((prev) => prev ?? { name: `${lat.toFixed(2)},${lon.toFixed(2)}`, latitude: lat, longitude: lon });
            }
        } catch (err: any) {
            console.error(err);
            setError("Failed to load weather. Try again.");
        } finally {
            setLoading(false);
        }
    };

    // City search -> geocoding (open-meteo geocoding API)
    const searchCity = async (q: string) => {
        if (!q) return;
        setLoading(true);
        setError("");
        try {
            const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
            url.searchParams.set("name", q);
            url.searchParams.set("count", "5");
            const res = await fetch(url.toString());
            if (!res.ok) throw new Error("Geocoding failed");
            const data = await res.json();
            const results: GeoResult[] = (data.results || []).map((r: any) => ({
                name: r.name + (r.admin1 ? `, ${r.admin1}` : "") + (r.country ? `, ${r.country}` : ""),
                latitude: r.latitude,
                longitude: r.longitude,
                admin1: r.admin1,
                country: r.country,
            }));
            if (results.length === 0) {
                setError("Location not found");
            } else {
                // pick first result
                const first = results[0];
                setLocation(first);
                await fetchWeather(first.latitude, first.longitude, first.name);
            }
        } catch (err) {
            console.error(err);
            setError("Search failed");
        } finally {
            setLoading(false);
        }
    };

    // Try geolocation on mount
    useEffect(() => {
        const tryGeolocation = () => {
            if (!navigator?.geolocation) return;
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    fetchWeather(pos.coords.latitude, pos.coords.longitude, "Current location");
                },
                () => {
                    // ignore errors (user denied); user can search manually
                },
                { timeout: 8000 }
            );
        };
        tryGeolocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LizardDiv className={`p-4 border rounded shadow-md bg-white/10 ${className}`}>
            <LizardText className="text-center font-bold text-lg mb-4">Weather</LizardText>

            <LizardDiv className="flex gap-2 mb-3">
                <input
                    className="flex-1 p-2 border rounded bg-transparent text-green-500"
                    placeholder="Search city (e.g. Manila)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") searchCity(query);
                    }}
                />
                <button
                    className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                    onClick={() => searchCity(query)}
                    disabled={loading}
                >
                    {loading ? "Searching…" : "Search"}
                </button>
                <button
                    className="px-3 py-2 rounded border hover:bg-white/5"
                    onClick={() => {
                        // trigger geolocation again
                        if (!navigator?.geolocation) {
                            setError("Geolocation not supported");
                            return;
                        }
                        setLoading(true);
                        navigator.geolocation.getCurrentPosition(
                            (pos) => {
                                fetchWeather(pos.coords.latitude, pos.coords.longitude, "Current location");
                            },
                            (err) => {
                                console.error(err);
                                setError("Failed to get location");
                                setLoading(false);
                            },
                            { timeout: 8000 }
                        );
                    }}
                >
                    Use my location
                </button>
            </LizardDiv>

            {error && <div className="text-red-400 text-sm mb-2">{error}</div>}

            {/* Current card */}
            <LizardDiv className="mb-3 p-3 rounded bg-white/5 flex items-center gap-3">
                <LizardDiv className="text-6xl">
                    {current
                        ? weatherCodeToEmojiLabel(current.weathercode).emoji
                        : "⏳"}
                </LizardDiv>
                <LizardDiv className="flex-1">
                    <LizardDiv className="flex items-center justify-between">
                        <LizardDiv>
                            <LizardDiv className="text-sm text-gray-300">
                                {location ? location.name : "—"}
                            </LizardDiv>
                            <LizardDiv className="font-bold text-lg items-center">
                                {current ? `${current.temperature.toFixed(1)}°C` : "—"}
                            </LizardDiv>
                            <LizardDiv className="text-xs text-gray-400 items-center">
                                {current ? weatherCodeToEmojiLabel(current.weathercode).label : ""}
                            </LizardDiv>
                        </LizardDiv>

                        <LizardDiv className="text-right text-xs text-gray-400">
                            <LizardDiv>Wind {current ? `${current.windspeed} km/h` : "—"}</LizardDiv>
                            <LizardDiv>{current ? new Date(current.time).toLocaleTimeString() : ""}</LizardDiv>
                        </LizardDiv>
                    </LizardDiv>
                </LizardDiv>
            </LizardDiv>

            {/* Daily forecast */}
            <LizardDiv className="grid grid-cols-3 gap-2">
                {daily.length === 0 && <div className="col-span-3 text-sm text-gray-400">No forecast yet</div>}
                {daily.slice(0, 3).map((d) => {
                    const { emoji, label } = weatherCodeToEmojiLabel(d.weathercode);
                    return (
                        <LizardDiv key={d.date} className="p-2 bg-white/5 rounded text-center">
                            <LizardDiv className="text-sm text-gray-300">{formatDate(d.date)}</LizardDiv>
                            <LizardDiv className="text-2xl">{emoji}</LizardDiv>
                            <LizardDiv className="text-sm font-bold">{d.tempMax?.toFixed(0)}° / {d.tempMin?.toFixed(0)}°</LizardDiv>
                            <LizardDiv className="text-xs text-gray-400">{label}</LizardDiv>
                        </LizardDiv>
                    );
                })}
            </LizardDiv>
        </LizardDiv>
    );
}
