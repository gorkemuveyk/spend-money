import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="w-full md:flex my-5 p-2 md:flex-wrap">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
