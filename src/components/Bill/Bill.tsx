import { addCommas } from "../../helpers/addComas";
import { useAppSelector } from "../../hooks";

const Bill = () => {
  const cart = useAppSelector((state) => state.products.cart);
  let cartTotal = useAppSelector((state) => state.products.cartTotal);
  cart.map((c) => (cartTotal += c.price * (c.quantity + 1)));

  return (
    <div className=" md:w-3/4 md:mx-auto w-full lg:w-[600px] mb-5 p-4 shadow rounded">
      <h2 className="text-center my-2 text-xl font-bold lg:text-xl">
        Your Receipt
      </h2>

      {cart.map((c, ind) => (
        <div
          key={ind}
          className="flex justify-between p-3 text-sm lg:text-lg text-center border-b"
        >
          <p className="w-1/3 text-start">{c.name}</p>
          <p className="w-1/3 text-center">
            {c.quantity + 1} x {addCommas(c.price)}
          </p>
          <p className="text-green-500 font-bold w-1/3 text-end">
            {addCommas(c.price * (c.quantity + 1))}
          </p>
        </div>
      ))}

      <div className="p-3 font-bold flex justify-between text-lg lg:text-xl ">
        <h2 className="">TOTAL</h2>
        <span className=" text-green-500">₺{addCommas(cartTotal)}</span>
      </div>
    </div>
  );
};

export default Bill;
