import { Typography } from '@material-ui/core'
import './style.css'
import React from 'react'


let date = new Date()


function Footer(){
    
    return (
        <Typography className="footer">Copyright Siddhant {date.getFullYear()}</Typography>
    )
}

export default Footer