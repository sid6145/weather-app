import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    navbar:{
        backgroundColor:"#736ced"
    }
}))

function Header(){
    const classes = useStyles()

   return(
        <AppBar position="static">
            <Toolbar  className={classes.navbar}>
                <Typography variant="h5">Weather</Typography>
            </Toolbar>
        </AppBar>
   ) 
}

export default Header