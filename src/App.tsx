import "./App.css";
import Bill from "./components/Bill/Bill";
import Header from "./components/Header/Header";
import ProductList from "./components/Product/ProductList";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="p-2">
      <div className="w-full md:w-3/5 mx-auto">
        <Header />
      </div>
      <div className="w-full lg:w-3/5 md:w-4/5 mx-auto">
        <Profile />
        <ProductList />
      </div>
      <Bill />
    </div>
  );
}

export default App;
