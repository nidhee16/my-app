

import { combineReducers } from 'redux'
import { productReducers, selectedproductReducers } from './reducers/productReducer'



 const rootReducer=combineReducers({
    allProducts:productReducers,
    product:selectedproductReducers
 })

 export default rootReducer
 