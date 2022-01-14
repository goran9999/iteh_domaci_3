import React from 'react'
import { AppBar,Toolbar,Typography,Button, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
const NavBar = () => {

    const useStyles=makeStyles({
        container:{
           width:'100px'
        }
    })
    const classes=useStyles();
    return (
       
        <AppBar  position="static">
          <Toolbar >
           <Typography variant='h6'>Books</Typography>
           <Container className={classes.container} >
           <Link to="/all-books"><Button  color="inherit">All books</Button></Link>
            <Link to="/add-book"><Button color="inherit">Add book</Button></Link>
            <Button color="inherit">Currently reading</Button>
           </Container>
          </Toolbar>
        </AppBar>
    //   </Box>
    )
}

export default NavBar
