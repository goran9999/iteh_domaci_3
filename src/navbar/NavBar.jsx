import React from 'react'
import { AppBar,Container,Toolbar,Typography } from '@mui/material'
const NavBar = () => {
    return (
        <AppBar>
        <Container>
            <Toolbar>
                <Typography variant='h6'>Books</Typography>
            </Toolbar>
        </Container>
    </AppBar>
    )
}

export default NavBar
