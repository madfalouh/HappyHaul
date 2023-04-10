import { useEffect, useState } from 'react'

import './App.css'

import { BrowserRouter as Router , Routes , Route, useNavigate } from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import ProductPage from './Pages/Products/ProductPage'
import ProductsPage from './Pages/Products/ProductsPage/ProductsPage'

import Nav from './component/nav/Nav'
import CartPage from './Pages/CartPage/CartPage'
import { getCart } from './actions/cartAction'
import { useDispatch } from 'react-redux'
import Login from './Pages/loginPage/Login'
import Register from './Pages/Register/Register'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './constant/UserConstant'
import Profile from './Pages/ProfilePage/Profile'


function App() {



const dispatch = useDispatch()



useEffect(()=>{
dispatch(getCart())
} ,[] )


 const userInfo = JSON.parse(  localStorage.getItem("usertoken") )  


useEffect(()=>{


if( userInfo){
    dispatch({ type: USER_LOGIN_REQUEST});
    dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo });

}
} , [dispatch , userInfo] )


  return (
    <div className="App">


<Router>
<Nav   ></Nav>

      <Routes>
      <Route path='/profile'  Component={Profile}   ></Route>
      <Route path='/'  Component={WelcomePage}  exact ></Route>
      <Route path='/product/:id'  Component={ProductPage} ></Route>
      <Route path='/products'  Component={ProductsPage}  ></Route> 
      <Route path='/cart' Component={CartPage}  ></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register'  Component={Register}></Route>
      </Routes>

</Router>

    </div>
  )
}

export default App
