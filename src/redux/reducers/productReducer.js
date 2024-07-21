import { setProducts } from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";
const initialState = {
    products: []
}

const initialCart = {
    cart:[]
};

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state
    }
}

export const selectedproductReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
       
        default:
            return state
    }
}

export const addToCartReducer = (state = initialCart,{type,payload}) => {
    switch(type) {
        case ActionTypes.ADD_CART:
            return {...state, cart:[...state.cart,payload]};
    default: 
      return state;
    }
}