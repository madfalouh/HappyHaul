import { useEffect, useState } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import ProductPage from "./Pages/Products/ProductPage";
import ProductsPage from "./Pages/Products/ProductsPage/ProductsPage";

import Nav from "./component/nav/Nav";
import CartPage from "./Pages/CartPage/CartPage";
import Login from "./Pages/loginPage/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/ProfilePage/Profile";
import Admin from "./Pages/admin/Admin";

function App() {


 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" >
            <Route path="/profile" Component={Profile} />
            <Route path="/" Component={WelcomePage} exact />
            <Route path="/product/:id" Component={ProductPage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/admin" Component={Admin} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
