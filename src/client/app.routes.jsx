import { lazy, Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Navigate, Route, Routes } from "react-router-dom";

const MoviesPage = lazy(() => import("./pages/movies/movies.page"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movie-details/movie-details.page")
);
const WishListPage = lazy(() => import("./pages/wish-list/wish-list.page"));

const AppRoute = () => (
  <Suspense fallback={<AiOutlineLoading3Quarters />}>
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />} />
      <Route path="/wish-list" element={<WishListPage />} />
    </Routes>
  </Suspense>
);

export default AppRoute;
