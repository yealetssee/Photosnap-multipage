import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const Features = lazy(() => import("./Pages/Features"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Stories = lazy(() => import("./Pages/Stories"));

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="features"
        element={
          <Suspense>
            <Features />
          </Suspense>
        }
      />
      <Route
        path="pricing"
        element={
          <Suspense fallback={<div>loading</div>}>
            <Pricing />
          </Suspense>
        }
      />
      <Route
        path="stories"
        element={
          <Suspense>
            <Stories />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
