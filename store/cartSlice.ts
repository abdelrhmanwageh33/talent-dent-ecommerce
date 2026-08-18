import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct {
  _id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  stock: number;
}

export interface CartItem {
  _id: string;
  product: CartProduct;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setCart: (
      state,
      action: PayloadAction<{
        items: CartItem[];
        totalPrice: number;
      }>
    ) => {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },

    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload
      );

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  setCart,
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;