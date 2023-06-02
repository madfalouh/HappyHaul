import { 
ORDER_GET_ORDER_REQUEST, 
ORDER_GET_ORDER_SUCCESS , 
ORDER_ADD_ORDER_REQUEST  , 
ORDER_ADD_ORDER_SUCCESS ,
ORDER_UPDATE_ORDER_REQUEST , 
ORDER_UPDATE_ORDER_SUCCESS ,
ORDER_REMOVE_ORDER_REQUEST , 
ORDER_REMOVE_ORDER_SUCCESS
 } from "../constant/OrderConstant";


export const orderReducer = (
  state = { orderItems: null, orderLoading: false },
  action
) => {
  switch (action.type) {
    case ORDER_GET_ORDER_REQUEST   :
      return { orderItems: [], orderLoading: true };

    case ORDER_GET_ORDER_SUCCESS  :
      return { orderLoading: false, orderItems: action.payload };

    case ORDER_ADD_ORDER_REQUEST   :
      return { orderLoading: true, orderItems: [] };

    case ORDER_ADD_ORDER_FAIL:
      return { orderLoading: false, cartError: action.payload };

    case ORDER_ADD_ORDER_SUCCESS:
      return { orderLoading: false, orderItems: action.payload };

    case ORDER_GET_ORDER_FAIL:
      return { orderLoading: false, cartError: action.payload };

    case ORDER_UPDATE_ORDER_REQUEST:
      return {  orderItems :state.orderItems  ,orderLoading: true };

    case ORDER_UPDATE_ORDER_SUCCESS:                 
              state.orderItems[0].orderItems.products  = action.payload.products;
               
      return { orderLoading: false, orderItems: state.orderItems };

    case ORDER_UPDATE_ORDER_FAIL:
      return { orderLoading: false, cartError: action.payload };

    case ORDER_REMOVE_ORDER_REQUEST:
      return { orderItems: [], orderLoading: true };

    case ORDER_REMOVE_ORDER_SUCCESS:
      return { orderLoading: false, orderItems: [] };

    case ORDER_REMOVE_ORDER_FAIL:
      return { orderLoading: false, cartError: action.payload };

    default:
      return state;
  }
};
