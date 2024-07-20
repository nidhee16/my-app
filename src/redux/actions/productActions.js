import apiCall from "../../apis/apiCall"
import { ActionTypes } from "../constants/action-types"
import { useDispatch } from "react-redux"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products

    }
}

export const fetchProducts =()=> async (dispatch) => {
   
    const response = await apiCall.get('/loaddata')
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
}

export const fetchIndividualProducts = (pid) => async(dispatch)=>{
    const response = await apiCall.get(`/loaddata/${pid}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload:response.data})

}


export const seelectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product

    }
}

export const addToCart = (cart) => {
    return {
        type: ActionTypes.ADD_CART,
        payload: cart
    }
}
