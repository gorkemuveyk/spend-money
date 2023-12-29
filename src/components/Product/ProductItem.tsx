import { addCommas } from "../../helpers/addComas";
import { useAppDispatch } from "../../hooks";
import { buyProduct, sellProduct } from "../../redux/slices/productSlice";

type itemType = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

const ProductItem = ({ item }: { item: itemType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="mb-2 w-full lg:w-1/3 md:w-1/2 rounded shadow p-3 flex flex-col items-center justify-center">
      <img src={`/img/items/${item.img}`} className="h-[130px] md:h-[110px]" />
      <h2 className="text-xl font-bold lg:text-xl">{item.name}</h2>
      <div className="text-md text-green-500 font-bold lg:text-xl ">
        ₺{addCommas(item.price)}
      </div>
      <div className="flex w-full justify-between mt-3 gap-2 ">
        <button
          onClick={() => {
            dispatch(sellProduct(item));
          }}
          disabled={item.quantity <= 0 ? true : false}
          style={item.quantity <= 0 ? { opacity: 0.5 } : { opacity: 1 }}
          className="w-1/3 p-1 lg:text-xl lg:w-1/4 bg-gradient-to-br rounded from-red-900 via-red-500 to-red-400 text-white "
        >
          Sell
        </button>
        <input
          type="number"
          value={item.quantity}
          readOnly={true}
          className="bg-white w-1/3 text-center p-1 border rounded outline-green-500 font-bold lg:text-xl "
        />
        <button
          className="lg:w-1/4 bg-blue-400 w-1/3 p-1 bg-gradient-to-br rounded from-green-900 via-green-500 to-green-700 text-white"
          onClick={() => {
            dispatch(buyProduct(item));
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
