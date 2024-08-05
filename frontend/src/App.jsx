import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Auth from "./Pages/Auth";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product/:slug" element={<Detail />} />
        <Route path="/treatment/:slug" element={<Blog />} />
        <Route path="/blog/" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
