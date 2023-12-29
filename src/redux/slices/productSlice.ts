import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import items from "../../constants/products.json";

type ItemsType = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type InitialStateType = {
  items: ItemsType[];
  money: number;
};

const initialState: InitialStateType = {
  items: items.map((item) => ({
    ...item,
    quantity: 0,
  })),
  money: 400000000,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    buyProduct: (state, action) => {
      const items = action.payload;
      if (state.money >= items.price) {
        const itemID = state.items.findIndex((item) => item.name == items.name);
        state.money -= items.price;
        state.items[itemID].quantity += 1;
      } else {
        alert("no money");
      }
    },
    sellProduct: (state, action) => {
      const items = action.payload;
      const itemID = state.items.findIndex((item) => item.name == items.name);
      if (state.items[itemID].quantity >= 1) {
        state.money += items.price;

        state.items[itemID].quantity -= 1;
      }
    },
  },
});

export default productSlice.reducer;
export const { buyProduct, sellProduct } = productSlice.actions;
export const useItems = (state: RootState) => state.products.items;
