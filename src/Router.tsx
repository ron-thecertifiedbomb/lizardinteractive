import { Routes, Route } from "react-router-dom";
import NotMatch from "./pages/NotMatch";
import Home from "./pages/home/Home";
import Sample from "./pages/Sample";
import { PlayGround } from "@/pages";
import { LizardLayout } from "./components/common/LizardComponents/layout";
import { useState, useEffect } from "react";
import { LizardSplashScreen } from "./components/common/LizardComponents/LizardSplashScreen";

export default function Router() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <LizardSplashScreen />; 

  return (
    <Routes>
      <Route element={<LizardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}
