const ProductItem = () => {
  return (
    <div className="mb-2 w-full md:w-1/3  rounded shadow p-3 flex flex-col items-center justify-center">
      <img
        src="https://neal.fun/spend/images/big-mac.jpg"
        className="rounded-full w-[120px] h-[120px] md:w-[100px] md:h-[100px] "
      />
      <h2 className="text-xl font-bold lg:text-xl">Big Mac</h2>
      <div className="text-md text-green-500 font-bold lg:text-xl ">₺40</div>
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
