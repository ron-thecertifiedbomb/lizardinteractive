import { Routes, Route } from "react-router-dom";
import NotMatch from "./pages/NotMatch";
import Home from "./pages/home/Home";
import Sample from "./pages/Sample";
import { PlayGround } from "@/pages";
import { LizardLayout } from "./components/common/LizardComponents/layout";



export default function Router() {
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
