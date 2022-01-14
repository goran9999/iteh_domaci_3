import React from 'react'
import { AppBar,Toolbar,Typography,Box, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
const NavBar = () => {

    const useStyles=makeStyles((theme)=>({
        header:{
            display:'flex',
            justifyContent:'space-between'
        },
        button:{
            width:120,
           
            
        },
        home:{
            marginRight:30,
            textDecoration:"none",
            color:"white",
            fontSize:'20px'
        }
    }));

    
    
    const classes=useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.header}>
            <Typography variant="h4">Books</Typography>
                <Box>
                    <Link to="/" className={classes.home}>
                        All Books
                        </Link>
                    <Link to="/add-book" className={classes.home}>
                        Add Book
                        </Link>
                    <Link to="/currently-reading" className={classes.home}>
                        Currently Reading
                        </Link>
              
                </Box>
            </Toolbar>
        </AppBar>

    );
}

export default NavBar
