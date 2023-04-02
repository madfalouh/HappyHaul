import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constant/ProductConstans";
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../constant/ProductConstans";
export const listProducts = () => async (dispatch) =>{

try {
    dispatch({type : PRODUCT_LIST_REQUEST})
const {data } = await axios.get('http://localhost:8080/api/products/')

dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})

} catch (error) {
     console.log(error)
    dispatch({type : PRODUCT_LIST_FAIL , payload :   error.response.data })

}



}



export const listProductDetail = (id) => async (dispatch) =>{

try {
    dispatch({type : PRODUCT_DETAIL_REQUEST})
const {data } = await axios.get(`http://localhost:8080/api/products/${id}`)
dispatch({type : PRODUCT_DETAIL_SUCCESS , payload : data})

} catch (error) {
     console.log(error)
    dispatch({type : PRODUCT_DETAIL_FAIL , payload :   error.response.data })

}






}