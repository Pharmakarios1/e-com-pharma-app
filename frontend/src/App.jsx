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
import { CiApple } from "react-icons/ci";
import Breadcrumb from "./components/Breadcrumb";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
    {
      id: 2,
      title: "Viagra",
      img: <CiApple />,
      detail:
        "viagra is a popular medication used to treat erectile dysfunction for upto 4hours",
      amount: "$15",
    },
  ];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product products={products} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product-detail" element={<Detail />} />
        <Route path="/treatment/:slug" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
