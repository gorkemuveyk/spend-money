import { addCommas } from "../../helpers/addComas";

type itemType = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const ProductItem = ({ item }: { item: itemType }) => {
  // w-[120px] h-[120px] md:w-[100px] md:h-[100px]
  return (
    <div className="mb-2 w-full lg:w-1/3 md:w-1/2 rounded shadow p-3 flex flex-col items-center justify-center">
      <img src={`/img/items/${item.img}`} className="h-[130px] md:h-[110px]" />
      <h2 className="text-xl font-bold lg:text-xl">{item.name}</h2>
      <div className="text-md text-green-500 font-bold lg:text-xl ">
        ₺{addCommas(item.price)}
      </div>
      <div className="flex w-full justify-between mt-3 gap-2 ">
        <button className="w-1/3 p-1 lg:text-xl lg:w-1/4 bg-gradient-to-br rounded from-red-900 via-red-500 to-red-400 text-white ">
          Sell
        </button>
        <input
          type="number"
          className="bg-white w-1/3 text-center p-1 border rounded outline-green-500 font-bold lg:text-xl "
          defaultValue={0}
        />
        <button className="lg:w-1/4 bg-blue-400 w-1/3 p-1 bg-gradient-to-br rounded from-green-900 via-green-500 to-green-700 text-white">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
