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


function App() {



const dispatch = useDispatch()

useEffect(()=>{
dispatch(getCart())


} ,[] )


  return (
    <div className="App">


<Router>
<Nav   ></Nav>

      <Routes>
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
