import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TVSeries from './pages/TVSeries'
import Search from "./pages/Search";
import AllMovies from "./pages/AllMovies";
import AllSeries from "./pages/AllSeries";
import Watch from "./pages/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/tvseries/:id",
    element: <TVSeries />
  },
  {
    path: "/search/:search_value",
    element: <Search />
  },
  {
    path: "/all/movies/page/:page_number",
    element: <AllMovies />
  },
  {
    path: "/all/tvseries/page/:page_number",
    element: <AllSeries />
  },
  {
    path: "/watch/:type/:id",
    element: <Watch />
  } ,
  {
    path: "*",
    element: <div>404 page not fount</div>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
