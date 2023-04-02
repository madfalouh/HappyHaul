import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constant/ProductConstans";

export const productDetailReducer = (
  state = { product: {}, loading: false },
  action
) => {
  console.log(action.type)
  switch (action.type) {
   
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, product: {} };

    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
