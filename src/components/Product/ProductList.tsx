import ProductItem from "./ProductItem";
import items from "../../constants/products.json";

const ProductList = () => {
  return (
    <div className="w-full md:flex my-5 p-2 md:flex-wrap">
      {items.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
