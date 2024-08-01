import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Auth from "./Pages/Auth";
import Blog from "./Pages/Blog";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product-detail" element={<Detail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
