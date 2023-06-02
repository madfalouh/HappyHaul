import axios from "axios";
import {
  USER_UPDATE_FAIL ,
  USER_UPDATE_REQUEST  , 
  USER_UPDATE_SUCCESS  , 
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constant/UserConstant";

export const getuserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST });
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8080/api/users/profile",
      headers: { Authorization: "Bearer " +  JSON.parse( localStorage.getItem("usertoken") ).token  },
    });
console.log("from react ");
   console.log(data);

    dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_DETAIL_FAIL, payload: error.response.data });
  }
};


export const updateUserDetails = (updatedata) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST});
    const { data } = await axios({
      method: "put",
      data : updatedata , 
      url: "http://localhost:8080/api/users/update",
      headers: { Authorization: "Bearer " +  JSON.parse( localStorage.getItem("usertoken") ).token  },
    }).then().catch((err)=>{console.log(err);})   ;
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: "error.response.data" });
  }
};



export const loginUser = ( email , password) => async (dispatch) => {
  try {
     console.log(  "from actin " +  email  + password);
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8080/api/users/login",
        data : {email , password} ,
        
    })

    localStorage.setItem("usertoken" ,  JSON.stringify(data)    )    

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    
  } catch (error) {

  console.log(error)             

    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.status});
  }
};



export const registerUser = (name , email , password) => async (dispatch) => {
  try {
     console.log(name);
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8080/api/users/register",
        data :    { name ,   email , password} ,
    }).then().catch(err =>{console.log(err);})  ;


    localStorage.setItem("usertoken" , JSON.stringify(data)  )    

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data });
  }
};