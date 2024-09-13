import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./SliderSlice";
import productsReducer from "../components/productfilter/ProductSlice";
import cartReducer from "../features/cart/CartSlice";

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});