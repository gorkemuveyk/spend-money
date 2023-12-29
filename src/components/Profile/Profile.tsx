import { addCommas } from "../../helpers/addComas";
import { useAppSelector } from "../../hooks";

const Profile = () => {
  return (
    <div className="w-full p-5 shadow-md mt-10 bg-gradient-to-bl from-green-500 via-green-900 to-green-500 text-white sticky top-0 z-20">
      <span className="text-xl text-center mx-auto block lg:text-2xl font-bold ">
        ₺{addCommas(useAppSelector((state) => state.products.money))}
      </span>
    </div>
  );
};

export default Profile;
