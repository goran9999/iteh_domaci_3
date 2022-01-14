import React from 'react'
import { useState } from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Icon, IconButton, Typography} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { makeStyles } from '@mui/styles';
const BookItem = (props) => {

    const useStyles=makeStyles({
        media: {           
            height: 320,     
            width: '90%',
            marginLeft:'5%'
           
            
          },
          card:{
              width:'300px',
              marginLeft:'100px',
              marginTop:'50px'
          }
    })

    const [reading,setReading] = useState(false);

    const classes=useStyles();

    const addToReading = () =>{
        setReading(prevState=>{
            return !prevState
        })
    }

    return (
        <Card className={classes.card} variant='outlined'>
            <CardHeader>{props.title}</CardHeader>
            <CardMedia  className={classes.media} image={props.imageUrl} component='img' />
            <CardContent>
                <Typography variant='p'>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={addToReading}>
                    <Icon><MenuBookIcon color={!reading?'primary':'success'}/></Icon>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default BookItem
