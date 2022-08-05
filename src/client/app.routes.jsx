import { lazy, Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/home.page"));

const AppRoute = () => (
  <Suspense fallback={<AiOutlineLoading3Quarters />}>
    <Routes>
      <Route path="/movies" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/movies" />} />
    </Routes>
  </Suspense>
);

export default AppRoute;
