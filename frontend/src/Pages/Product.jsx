import { CiApple } from "react-icons/ci";
import Card from "../components/Card";

const Product = ({ products }) => {
  return (
    <div className="m-h-screen px-5 md:px-20 pt-10 md:py-10 grid w-full md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center place-items-center">
      {products.map((product) => (
        <div key={product.id}>
          <Card
            title={product.title}
            img={product.img}
            detail={product.detail}
            amount={product.amount}
          />
        </div>
      ))}
    </div>
  );
};

export default Product;
