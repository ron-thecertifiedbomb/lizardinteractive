import { useEffect, useState, useRef } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
    useMapEvents,
    Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LizardDiv } from "./layout";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Suggestion {
    display_name: string;
    lat: string;
    lon: string;
}

interface LizardLocatorProps {
    className?: string;
}

export function LizardLocator({ className }: LizardLocatorProps) {
    const [origin, setOrigin] = useState<[number, number] | null>(null);
    const [destination, setDestination] = useState<[number, number] | null>(null);
    const [route, setRoute] = useState<[number, number][]>([]);
    const [distance, setDistance] = useState<number | null>(null);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [showModal, setShowModal] = useState(false);
    const mapRef = useRef<L.Map | null>(null);

    // Get user's location
    useEffect(() => {
        navigator.geolocation?.getCurrentPosition(
            (pos) => setOrigin([pos.coords.latitude, pos.coords.longitude]),
            () => alert("Unable to retrieve your location")
        );
    }, []);

    // Fetch route from OSRM
    async function fetchRoute(dest: [number, number]) {
        if (!origin) return;
        try {
            const res = await fetch(
                `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${dest[1]},${dest[0]}?overview=full&geometries=geojson`
            );
            const data = await res.json();
            if (data.routes?.length) {
                const coords = data.routes[0].geometry.coordinates.map(
                    ([lng, lat]: [number, number]) => [lat, lng]
                ) as [number, number][];
                setRoute(coords);
                setDistance(data.routes[0].distance);
                setShowModal(true);
            }
        } catch (err) {
            console.error(err);
            alert("Routing failed");
        }
    }

    // Fetch suggestions while typing (bounded to user's location)
    useEffect(() => {
        if (!query.trim() || !origin) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const [lat, lon] = origin;
                const delta = 0.5; // ~50 km bounding box
                const viewbox = `${lon - delta},${lat - delta},${lon + delta},${lat + delta}`;

                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                        query
                    )}&addressdetails=1&limit=5&viewbox=${viewbox}&bounded=1`,
                    {
                        headers: {
                            Accept: "application/json",
                            "User-Agent": "YourAppNameHere",
                        },
                    }
                );
                const results = await res.json();
                setSuggestions(results);
            } catch (err) {
                console.error(err);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [query, origin]);

    const selectSuggestion = (lat: string, lon: string) => {
        const coords: [number, number] = [parseFloat(lat), parseFloat(lon)];
        setDestination(coords);
        fetchRoute(coords);
        setQuery("");
        setSuggestions([]);
    };

    // Center map
    function CenterMap({ dest }: { dest: [number, number] | null }) {
        const map = useMap();
        mapRef.current = map;
        useEffect(() => {
            if (dest) map.setView(dest, 14);
        }, [dest, map]);
        return null;
    }

    // Map click marker
    function DestinationMarker() {
        useMapEvents({
            click(e) {
                const coords: [number, number] = [e.latlng.lat, e.latlng.lng];
                setDestination(coords);
                fetchRoute(coords);
            },
        });
        return destination ? (
            <Marker position={destination}>
                <Popup>Destination selected</Popup>
            </Marker>
        ) : null;
    }

    // Find Near Me button
    const handleFindNearMe = async () => {
        if (!origin || !mapRef.current) return;

        mapRef.current.setView(origin, 14);
        setDestination(null);
        setRoute([]);
        setDistance(null);
        setShowModal(false);
        setQuery("");

        try {
            const [lat, lon] = origin;
            const delta = 0.1; // smaller bounding box (~10 km)
            const viewbox = `${lon - delta},${lat - delta},${lon + delta},${lat + delta}`;

            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=&addressdetails=1&limit=10&viewbox=${viewbox}&bounded=1`,
                {
                    headers: {
                        Accept: "application/json",
                        "User-Agent": "YourAppNameHere",
                    },
                }
            );

            const results: Suggestion[] = await res.json();

            // Filter results to be within 10 km
            const nearby = results.filter((r) => {
                const dist = L.latLng(origin[0], origin[1]).distanceTo(
                    L.latLng(parseFloat(r.lat), parseFloat(r.lon))
                );
                return dist <= 10000; // only within 10 km
            });

            setSuggestions(nearby);
        } catch (err) {
            console.error(err);
        }
    };



    if (!origin)
        return (
            <LizardDiv className={`flex-1 flex justify-center items-center ${className}`}>
                Locating...
            </LizardDiv>
        );

    return (
        <LizardDiv className={`relative w-full h-full ${className}`}>
            {/* Search & Find Near Me */}
            <LizardDiv className="absolute top-10 left-1/2 -translate-x-1/2 w-[70%] max-w-md z-[1000] flex space-x-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search destination..."
                    className="flex-1 px-2 py-1 rounded border focus:outline-none text-[13px] bg-[#065f46]/70 text-[#f8fafc]"
                />
                <button
                    onClick={handleFindNearMe}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                >
                    Find Near Me
                </button>
            </LizardDiv>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
                <LizardDiv className="absolute top-16 left-1/2 -translate-x-1/2 w-[70%] max-w-md bg-white shadow-md rounded-b-md max-h-52 overflow-auto z-[1001]  text-[#064e3b]">
                    {suggestions.map((s, i) => (
                        <LizardDiv
                            key={i}
                            className="px-2 py-1 hover:bg-green-100 cursor-pointer text-sm"
                            onClick={() => selectSuggestion(s.lat, s.lon)}
                        >
                            {s.display_name}
                        </LizardDiv>
                    ))}
                </LizardDiv>
            )}

            {/* Map */}
            <MapContainer center={origin as L.LatLngExpression} zoom={14} className="w-full h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={origin}>
                    <Popup>You are here</Popup>
                </Marker>

                <DestinationMarker />
                <CenterMap dest={destination} />

                {route.length > 0 && <Polyline positions={route} color="green" />}
            </MapContainer>

            {/* Distance Modal */}
            {showModal && distance && (
                <LizardDiv className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/80 text-white p-4 shadow-md max-w-xs w-[90%] z-[1000] rounded-2xl">
                    <LizardDiv className="flex justify-between items-center">
                        <div>Distance from me</div>
                        <div>{(distance / 1000).toFixed(2)} km</div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="text-white/50 hover:text-white text-[10px]"
                        >
                            close
                        </button>
                    </LizardDiv>
                </LizardDiv>
            )}
        </LizardDiv>
    );
}
