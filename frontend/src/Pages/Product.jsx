import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";
import { products } from "../assets/static";

const Product = () => {
  const slug = useParams();
  return (
    <div className="min-h-screen px-5 md:px-20 pt-10 md:py-10 flex gap-4  justify-center flex-wrap ">
      {products.map((product) => (
        <Link to={`/product/${slug}`} key={product.id}>
          <Card
            title={product.title}
            img={product.img}
            detail={product.detail}
            amount={product.amount}
          />
        </Link>
      ))}
    </div>
  );
};

export default Product;
