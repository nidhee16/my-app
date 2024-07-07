

import { combineReducers } from 'redux'
import { productReducers } from './reducers/productReducer'



 const rootReducer=combineReducers({
    allProducts:productReducers
 })

 export default rootReducer
 