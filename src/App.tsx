import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/detail/DetailsPage";
import HomePage from "./pages/home/HomePage";
import { searchLoader } from "./pages/search/searchLoader";
import { detailLoader } from "./pages/detail/detailLoader";
import { homeLoader } from "./pages/home/homeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:pkgName",
        element: <DetailsPage />,
        loader: detailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
