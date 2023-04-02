import {createStore , combineReducers , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/CartReducers'
import { productDetailReducer } from './reducers/ProductDetailReducer'
import { productListReducer } from './reducers/ProductReducer'
import { userReducer } from './reducers/UserReducer'

const middleware = [thunk]
const reducer = combineReducers({
user : userReducer ,
CartItem : cartReducer , 
productList : productListReducer , 
productDetail:  productDetailReducer
})

const initialState =  {
CartItem : {cartItems :null  , cartLoading :false  } , 
user : {}
}


const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))


export default store