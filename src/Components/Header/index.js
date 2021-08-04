import React from 'react'
import {  AppBar, Toolbar, Typography } from '@material-ui/core'
import './style.css'


function Header(){

   return(
        <AppBar position="static">
            <Toolbar  className="navbar">
                <Typography variant="h5">Weather</Typography>
            </Toolbar>
        </AppBar>
   ) 
}

export default Header