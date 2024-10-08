import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "./ProductData";

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        filterProducts: 
        JSON.parse(sessionStorage.getItem("filterdData")) || storeData ,
        singleProduct:
        JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter(
                    (product) => product.type === action.payload
                );
                state.filterProducts = filter;
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filterdData", saveState);
            } catch (err) {
                return err;
            }
        },
        singleProduct(state, action) {
            try {
                const oneProduct = storeData.filter(
                    (product) => product.id === action.payload
                );
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct", saveState);
                console.log("oneProduct", oneProduct);
            } catch (err) {
                return err;
            }
        },
    },
});

export const { filterProducts, singleProduct } = ProductSlice.actions;
export default ProductSlice.reducer;