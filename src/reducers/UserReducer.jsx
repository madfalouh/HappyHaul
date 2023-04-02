import { useSelector } from "react-redux";
import {
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
export const userReducer = (
  state = { user: {}, isUserLoading: false  , userIsLogged : false  },
  action
) => {

switch(action.type) {

case  USER_DETAIL_REQUEST  : 
    return { user : {}  , isUserLoading : true  }
case  USER_DETAIL_SUCCESS  : 
    return { user :  action.payload    , isUserLoading : false  }
case  USER_DETAIL_FAIL  : 
    return { userError :  action.payload   , isUserLoading : false  }






case  USER_LOGIN_REQUEST  : 
    return { user : {}  , isUserLoading : true  , userIsLogged : false  }
case  USER_LOGIN_SUCCESS  : 
    return { user :  action.payload  , isUserLoading : false   , userIsLogged : true }
case  USER_LOGIN_FAIL  : 
    return { userError :  action.payload  , isUserLoading : false   , userIsLogged : false }





case  USER_REGISTER_REQUEST  : 
    return { user : {}  , isUserLoading : true  , userIsLogged : false  }
case  USER_REGISTER_SUCCESS  : 
    return { user :  action.payload  , isUserLoading : false   , userIsLogged : true }
case  USER_REGISTER_FAIL  : 
    return { userError :  action.payload  , isUserLoading : false   , userIsLogged : false }



default : 
 return state
  


}



};
