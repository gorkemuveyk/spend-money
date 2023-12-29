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
  cart: ItemsType[];
  cartTotal: number;
};

const initialState: InitialStateType = {
  items: items.map((item) => ({
    ...item,
    quantity: 0,
  })),
  money: 400000000,
  cart: [],
  cartTotal: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    buyProduct: (state, action) => {
      const items = action.payload;
      if (state.money >= items.price) {
        const itemID = state.items.findIndex((item) => item.name == items.name);

        state.items[itemID].quantity += 1;
        state.money -= items.price;

        if (!state.cart.some((c) => c.name === items.name)) {
          state.cart.push(items);
        } else {
          const foundItem = state.cart.find((c) => c.id - 1 === itemID);
          if (foundItem) {
            foundItem.quantity += 1;
          }
        }
      } else {
        alert("no money");
      }
    },
    sellProduct: (state, action) => {
      const items = action.payload;
      const itemID = state.items.findIndex((item) => item.name === items.name);

      if (itemID !== -1 && state.items[itemID].quantity > 0) {
        state.money += items.price;
        state.items[itemID].quantity -= 1;
        const foundItem = state.cart.find((c) => c.id - 1 === itemID);
        if (foundItem) {
          foundItem.quantity -= 1;
        }

        if (state.items[itemID].quantity === 0) {
          const cartIndex = state.cart.findIndex((c) => c.id === items.id);
          if (cartIndex !== -1) {
            state.cart.splice(cartIndex, 1);
          }
        }
      }
    },
  },
});

export default productSlice.reducer;
export const { buyProduct, sellProduct } = productSlice.actions;
export const useItems = (state: RootState) => state.products.items;
