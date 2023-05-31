
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";

import "./header.css"


import React from 'react'

function Cart() {
  return (
    <React.Fragment>
        <div className="header__nav ">
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
        </Link>
      </div>
    </React.Fragment>
    )
}

export default Cart