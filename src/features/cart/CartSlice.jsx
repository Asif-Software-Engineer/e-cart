import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.quantity++;
          exist.totalPrice += productId.price;
          exist.totalAmount++;
          exist.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            img: productId.img,
            price: productId.price,
            size: productId.size,
            text: productId.text,
            quantity: 1,
            totalPrice: productId.price,
            name: productId.name,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.quantity === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.quantity--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          exist.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
