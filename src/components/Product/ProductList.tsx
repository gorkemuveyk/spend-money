import ProductItem from "./ProductItem";
import { useItems } from "../../redux/slices/productSlice";
import { useAppSelector } from "../../hooks";

const ProductList = () => {
  const items = useAppSelector(useItems);

  return (
    <div className="w-full md:flex my-5 p-2 md:flex-wrap">
      {items.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
