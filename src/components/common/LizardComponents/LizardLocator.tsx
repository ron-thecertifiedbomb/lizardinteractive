import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon in Leaflet + React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface LizardLocatorProps {
    className?: string;
}

export function LizardLocator({ className }: LizardLocatorProps) {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [address, setAddress] = useState<{ city?: string; country?: string } | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);

                try {
                    // Reverse geocoding using Nominatim API
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    const data = await res.json();
                    const city = data.address?.city || data.address?.town || data.address?.village;
                    const country = data.address?.country;
                    setAddress({ city, country });
                    console.log({ city, country });
                } catch (err) {
                    console.error("Failed to get location info", err);
                }
            },
            (err) => {
                console.error(err);
                alert("Unable to retrieve your location");
            }
        );
    }, []);

    if (!position) return <div className={`flex-1 flex justify-center items-center ${className}`}>Locating...</div>;

    return (
        <MapContainer
            center={position as L.LatLngExpression}
            zoom={14}
            className={`w-full h-full ${className}`}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    You are here
                    <br />
                    {address ? `${address.city || ""}, ${address.country || ""}` : "Loading address..."}
                </Popup>
            </Marker>
        </MapContainer>
    );
}
