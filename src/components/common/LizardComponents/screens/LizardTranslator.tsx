import { useState, useEffect } from "react";
import { LizardDiv } from "../layout";
import { LizardText } from "../LizardText";

interface LizardTranslatorProps {
    className?: string;
}

interface Language {
    code: string;
    name: string;
}

export function LizardTranslator({ className = "" }: LizardTranslatorProps) {
    const [text, setText] = useState("");
    const [translated, setTranslated] = useState("");
    const [fromLang, setFromLang] = useState("en");
    const [toLang, setToLang] = useState("es");
    const [languages, setLanguages] = useState<Language[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // Fetch languages from LibreTranslate API
    useEffect(() => {
        const fetchLanguages = async () => {
            setLoading(true); // start loading
            try {
                const res = await fetch("https://libretranslate.com/languages");
                if (!res.ok) throw new Error("Failed to fetch languages");

                const data: Language[] = await res.json();

                const updatedLanguages = data.some((lang) => lang.code === "tl")
                    ? data
                    : [...data, { code: "tl", name: "Filipino" }];

                setLanguages(updatedLanguages);
            } catch (err) {
                console.error("Failed to fetch languages:", err);
                setError("Failed to load languages");
            } finally {
                setLoading(false); // stop loading
            }
        };

        fetchLanguages();
    }, []);

    const translateText = async () => {
        if (!text) return;
        setLoading(true);
        setError("");
        setTranslated("");

        try {
            const res = await fetch(
                `https://lingva.ml/api/v1/${fromLang}/${toLang}/${encodeURIComponent(text)}`
            );
            if (!res.ok) throw new Error("Failed to translate");
            const data = await res.json();
            setTranslated(data.translation);
        } catch (err) {
            console.error(err);
            setError("Translation failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <LizardDiv className={`px-4 py-8 border   border-green-500 bg-white/10 text-green-500 rounded w-full max-w-md ${className} uppercase`}>
            <LizardText className="mb-2 font-bold">Lizard Interactive Translator</LizardText>

            <textarea
                className="border   border-green-500 text-green-500 p-2 rounded w-full mb-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type text here..."
            />

            <LizardDiv className="flex gap-2 mb-2">
                <select
                    className="flex-1 border border-green-500 rounded bg-transparent text-green-500 p-1 outline-none"
                    value={fromLang}
                    onChange={(e) => setFromLang(e.target.value)}
                    disabled={loading}
                >
                    {loading ? (
                        <option>Loading...</option>
                    ) : (
                        languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))
                    )}
                </select>

                <select
                    className="flex-1 border border-green-500 rounded bg-transparent text-green-500 p-1 outline-none"
                    value={toLang}
                    onChange={(e) => setToLang(e.target.value)}
                    disabled={loading}
                >
                    {loading ? (
                        <option>Loading...</option>
                    ) : (
                        languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))
                    )}
                </select>
            </LizardDiv>

            <button
                onClick={translateText}
                disabled={loading || !text}
                className="px-4 py-1 bg-gray-800 text-white  hover:bg-gray-700 mb-2 disabled:opacity-50  w-full max-w-[200px] mx-auto rounded-2xl"
            >
                {loading ? "Translating..." : "Translate"}
            </button>

            {error && <LizardText className="text-red-500 mb-2">{error}</LizardText>}

            <LizardText>Translated: {translated}</LizardText>
        </LizardDiv>
    );
}
