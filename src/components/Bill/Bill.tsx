const Bill = () => {
  return (
    <div className=" md:w-3/4 md:mx-auto w-full lg:w-[600px]  p-4 shadow rounded">
      <h2 className="text-center my-2 text-xl font-bold lg:text-xl">
        Your Receipt
      </h2>
      <div className="flex justify-between p-3 rounded text-sm lg:text-lg">
        <p>Name</p>
        <p>count</p>
        <p className="text-green-500 font-bold">price</p>
      </div>
      <div className="border-t p-3 font-bold flex justify-between text-lg lg:text-xl ">
        <h2 className="">TOTAL</h2>
        <span className=" text-green-500">₺400.000.000</span>
      </div>
    </div>
  );
};

export default Bill;
