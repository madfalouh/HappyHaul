import {
  CART_ADD_CART_FAIL,
  CART_ADD_CART_REQUEST,
  CART_ADD_CART_SUCCESS,
  CART_GET_CART_FAIL,
  CART_GET_CART_REQUEST,
  CART_GET_CART_SUCCESS,
  CART_REMOVE_CART_FAIL,
  CART_REMOVE_CART_REQUEST,
  CART_REMOVE_CART_SUCCESS,
  CART_UPDATE_CART_FAIL,
  CART_UPDATE_CART_REQUEST,
  CART_UPDATE_CART_SUCCESS,
} from "../constant/CartConstant";

export const cartReducer = (
  state = { cartItems: null, cartLoading: false },
  action
) => {
  switch (action.type) {
    case CART_GET_CART_REQUEST:
      return { cartItems: [], cartLoading: true };

    case CART_GET_CART_SUCCESS:
      return { cartLoading: false, cartItems: action.payload };

    case CART_ADD_CART_REQUEST:
      return { cartLoading: true, cartItems: [] };

    case CART_ADD_CART_FAIL:
      return { cartLoading: false, cartError: action.payload };

    case CART_ADD_CART_SUCCESS:
      return { cartLoading: false, cartItems: action.payload };

    case CART_GET_CART_FAIL:
      return { cartLoading: false, cartError: action.payload };

    case CART_UPDATE_CART_REQUEST:
      return {  cartItems :state.cartItems  ,cartLoading: true };

    case CART_UPDATE_CART_SUCCESS:                 
              state.cartItems[0].cartItems.products  = action.payload.products;
               
      return { cartLoading: false, cartItems: state.cartItems };

    case CART_UPDATE_CART_FAIL:
      return { cartLoading: false, cartError: action.payload };

    case CART_REMOVE_CART_REQUEST:
      return { cartItems: [], cartLoading: true };

    case CART_REMOVE_CART_SUCCESS:
      return { cartLoading: false, cartItems: [] };

    case CART_REMOVE_CART_FAIL:
      return { cartLoading: false, cartError: action.payload };

    default:
      return state;
  }
};
