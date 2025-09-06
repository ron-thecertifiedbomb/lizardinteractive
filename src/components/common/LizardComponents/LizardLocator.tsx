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
    const [route, setRoute] = useState<[number, number][]>([]);
    const [distance, setDistance] = useState<number | null>(null);
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Get user's location
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

    // Center map when destination changes
    function CenterMap({ dest }: { dest: [number, number] | null }) {
        const map = useMap();
        useEffect(() => {
            if (dest) map.setView(dest, 14);
        }, [dest, map]);
        return null;
    }

    // Handle clicking on the map
    function DestinationMarker() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                const coords: [number, number] = [lat, lng];
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

    // Fetch route from OSRM
    async function fetchRoute(dest: [number, number]) {
        if (!origin) return;

        try {
            const res = await fetch(
                `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${dest[1]},${dest[0]}?overview=full&geometries=geojson`
            );
            const data = await res.json();

            if (data.routes && data.routes.length > 0) {
                const coords = data.routes[0].geometry.coordinates.map(
                    ([lng, lat]: [number, number]) => [lat, lng]
                ) as [number, number][];
                setRoute(coords);
                setDistance(data.routes[0].distance); // in meters
                setShowModal(true);
            }
        } catch (err) {
            console.error("Routing failed", err);
            alert("Unable to calculate route");
        }
    }

    // Handle search by address
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
                fetchRoute(coords);
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
            <LizardDiv className={`flex-1 flex justify-center items-center ${className}`}>
                Locating...
            </LizardDiv>
        );

    return (
        <LizardDiv className={`relative w-full h-full ${className}`}>
            {/* Search bar */}
            <form
                onSubmit={handleSearch}
                className="absolute top-10 left-1/2 -translate-x-1/2 z-[1000] bg-[#065f46]/70 rounded shadow-md flex items-center space-x-2 p-2 w-[70%] max-w-md"
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search destination..."
                    className="flex-1 px-2 py-1 rounded border focus:outline-none focus:ring-[0.2px] focus:ring-[#f8fafc] text-[13px] text-[#f8fafc]"
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

                {/* Road/Path Polyline */}
                {route.length > 0 && <Polyline positions={route} color="green" />}
            </MapContainer>

            {/* Distance Modal */}
            {showModal && distance && (
                <LizardDiv className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/80 text-white p-4 shadow-md max-w-xs w-[90%] z-[1000] rounded-2xl ">
                    <LizardDiv className="flex justify-between items-start gap-4">
                        <LizardDiv className="w-full justify-end items-end">
                            <button
                                className=" text-white/50 hover:text-white bg-gray-700 p-1 px-2 rounded-2xl text-[10px]"
                                onClick={() => setShowModal(false)}
                            >
                                close
                            </button>
                        </LizardDiv>
                        <LizardDiv direction="row" className="justify-between w-full items-center">
                            <LizardDiv className="text-1xl ">Distance from me</LizardDiv>
                            <LizardDiv className="text-1xl">{(distance / 1000).toFixed(2)} km</LizardDiv>
                        </LizardDiv>
                    
                    </LizardDiv>
                </LizardDiv>
            )}
        </LizardDiv>
    );
}
