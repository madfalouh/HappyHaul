import axios from "axios";
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

export const getCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_GET_CART_REQUEST });

    const { data } = await axios({
      url: `http://localhost:8080/api/carts/`,
      method: "get",
    });

    dispatch({
      type: CART_GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CART_GET_CART_FAIL, payload: error.response.data });
  }

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().CartItem.cartItems)
  );
};

export const addCart = (id, qty) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ADD_CART_REQUEST });

    await axios({
      url: `http://localhost:8080/api/carts/`,
      method: "post",
      data: {
        cartItems: {
          products: [{ product: id, qty: qty }],
        },
      },
    });

    dispatch({
      type: CART_ADD_CART_SUCCESS,
      payload: {
        cartItems: {
          products: [{ product: id, qty: qty }],
        },
      },
    });
  } catch (error) {
    dispatch({ type: CART_ADD_CART_FAIL, payload: error.response.data });
  }

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().CartItem.cartItems)
  );
};

export const updateCart = (id, products) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_UPDATE_CART_REQUEST });
    console.log(products)
    await axios({
      url: `http://localhost:8080/api/carts/${id}`,
      method: "put",
      data: {
        products,
      },
    });


console.log("prrrrrrrrrrrrrrrrrrrrr");
   
console.log(products)



    dispatch({
      type: CART_UPDATE_CART_SUCCESS,
      payload: {
        products: products,
      },
    });
  } catch (error) {
    dispatch({ type: CART_UPDATE_CART_FAIL, payload: error.response.data });
  }

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().CartItem.cartItems)
  );
};

export const removeCart = (id, qty) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_REMOVE_CART_REQUEST });

    await axios({
      url: `http://localhost:8080/api/carts/${id}`,
      method: "delete",
    });

    dispatch({ type: CART_REMOVE_CART_SUCCESS, payload: [] });
  } catch (error) {
    dispatch({ type: CART_REMOVE_CART_FAIL, payload: error.response.data });
  }

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().CartItem.cartItems)
  );
};
