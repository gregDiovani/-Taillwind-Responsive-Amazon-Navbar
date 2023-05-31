import React from 'react'
import "./header.css"
import Cart from './cart';

import {
  AppBar,Toolbar,Typography,useTheme,useMediaQuery 
} from "@mui/material";

import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from './drawer';


function Header() {


const theme = useTheme()
const isMatch = useMediaQuery(theme.breakpoints.down('md'))



  return (
    <AppBar position="static" style={{backgroundColor: "#131921"}}>
    <Toolbar>
      <Typography variant="h6" className='flex gap-1'  color="inherit " component="div">
      <StorefrontIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">eShop</h2>
      </Typography>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {isMatch ? 

      (<DrawerComp/>) 

      :(<Cart/> )
     

      }
    </Toolbar>
</AppBar>
    
  )
}

export default Header