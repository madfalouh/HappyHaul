import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions/userAction'
import Loader from '../../component/Loader/Loader'


function Login() {

const email = useRef()
const password = useRef()
const dispatch = useDispatch()
const navigate = useNavigate()
const User = useSelector((state) => state.user ) 

const {isUserLoading,user ,userIsLogged } = User




const hundleLogin = ( ) =>{


console.log(email.current.value , password.current.value);
 

dispatch(loginUser(email.current.value , password.current.value))


}

useEffect (()=>{

if(userIsLogged){

history.pushState('/')



}

} , [ history ,userIsLogged])


  return (
    <div>
{  isUserLoading  ?  <Loader></Loader>  : (<> <input  ref={email}  type={"text"}  ></input>
      <input  ref={password}   type={"password"}  ></input>
        
      
    
      <button onClick={hundleLogin}  > <Link  to="/"  >5oya diali</Link> </button></>) }
     
    </div>
  )
}

export default Login
