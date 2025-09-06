import { useEffect, useState } from "react";
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

interface LizardLocatorProps {
    className?: string;
}

export function LizardLocator({ className }: LizardLocatorProps) {
    const [origin, setOrigin] = useState<[number, number] | null>(null);
    const [destination, setDestination] = useState<[number, number] | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setOrigin([latitude, longitude]);
            },
            (err) => {
                console.error(err);
                alert("Unable to retrieve your location");
            }
        );
    }, []);

    function CenterMap({ dest }: { dest: [number, number] | null }) {
        const map = useMap();
        useEffect(() => {
            if (dest) map.setView(dest, 14);
        }, [dest, map]);
        return null;
    }

    function DestinationMarker() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                const coords: [number, number] = [lat, lng];
                setDestination(coords);

                if (origin) {
                    const d = L.latLng(origin[0], origin[1]).distanceTo(
                        L.latLng(lat, lng)
                    );
                    setDistance(d);
                    setShowModal(true);
                }
            },
        });
        return destination ? (
            <Marker position={destination}>
                <Popup>Destination selected</Popup>
            </Marker>
        ) : null;
    }

    async function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        if (!query.trim()) return;
        setSearching(true);

        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
            );
            const results = await res.json();
            if (results && results.length > 0) {
                const { lat, lon } = results[0];
                const coords: [number, number] = [parseFloat(lat), parseFloat(lon)];
                setDestination(coords);

                if (origin) {
                    const d = L.latLng(origin[0], origin[1]).distanceTo(
                        L.latLng(coords[0], coords[1])
                    );
                    setDistance(d);
                    setShowModal(true);
                }
            } else {
                alert("No results found");
            }
        } catch (err) {
            console.error("Search failed", err);
        } finally {
            setSearching(false);
        }
    }

    if (!origin)
        return (
            <div className={`flex-1 flex justify-center items-center ${className}`}>
                Locating...
            </div>
        );

    return (
        <LizardDiv className={`relative w-full h-full ${className}`}>
            {/* Search bar */}
            <form
                onSubmit={handleSearch}
                className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-white/90 rounded shadow-md flex items-center space-x-2 p-2 w-[80%] max-w-md"
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search destination..."
                    className="flex-1 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-emerald-500"
                />
                <button
                    type="submit"
                    disabled={searching}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 disabled:opacity-50"
                >
                    {searching ? "..." : "Go"}
                </button>
            </form>

            {/* Map */}
            <MapContainer
                center={origin as L.LatLngExpression}
                zoom={14}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={origin}>
                    <Popup>You are here</Popup>
                </Marker>

                <DestinationMarker />
                <CenterMap dest={destination} />

                {origin && destination && (
                    <Polyline positions={[origin, destination]} color="green" />
                )}
            </MapContainer>

            {/* Distance Modal */}
            {showModal && distance && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/80 text-white p-4 rounded shadow-md max-w-xs w-[90%] z-[1000]">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="font-semibold text-sm mb-1">Distance from me</div>
                            <div className="text-lg">{(distance / 1000).toFixed(2)} km</div>
                        </div>
                        <button
                            className="ml-4 text-white/70 hover:text-white"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </LizardDiv>
    );
}
