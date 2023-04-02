import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../actions/userAction'

function Register() {


const email = useRef()
const password = useRef()
const name = useRef()
const dispatch = useDispatch()
const navigate = useNavigate()

const User = useSelector((state) => state.user ) 

const {isUserLoading,user ,userIsLogged } = User


const hundleLogin = ( ) =>{


console.log(email.current.value , password.current.value);
 

dispatch(   registerUser(name.current.value , email.current.value , password.current.value)    )


}

useEffect (()=>{

if(userIsLogged){

window.location.replace("/")

}

} , [userIsLogged])



  return (
    <div>
            <input  ref={name}   type={"text"}  ></input>
            <input  ref={email}  type={"text"}  ></input>
      <input  ref={password}   type={"password"}  ></input>
     
      <button onClick={hundleLogin}  >jkbkjbkb</button>
    </div>
  )
}

export default Register
