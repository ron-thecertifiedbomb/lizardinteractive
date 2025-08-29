import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import NotMatch from "./pages/NotMatch";
import Home from "./pages/home/Home";
import Sample from "./pages/Sample";
import { PlayGround } from "@/pages";


export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}
