import React from 'react'
import { useState } from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Icon, IconButton, Typography} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { readingActions } from '../../slice/reading-slice';
const BookItem = (props) => {

    const useStyles=makeStyles({
        media: {           
            height: 500,     
            width: '90%',
            
           
            
          },
          card:{
              width:'300px',
              marginLeft:'100px',
              marginTop:'50px'
          }
    })

    const read=useSelector(state=>state.reading.items);
    const found=read.find(book=>book.id===props.id)
    const [reading,setReading] = useState(found?true:false);
    const dispatch=useDispatch();
    const classes=useStyles();

    const addToReading = () =>{
        setReading(prevState=>{
            return !prevState
        })
        const book={
            id:props.id,
            title:props.title,
            description:props.description,
            pageCount:+props.pageCount,
            imageUrl:props.imageUrl

        }
        dispatch(readingActions.addOrRemoveBook({book:book}))
    }

    return (
        <Card className={classes.card} variant='outlined'>
            <CardHeader  title={props.title}/>
            <CardMedia  className={classes.media} image={props.imageUrl} component='img' />
            <CardContent>
                <Typography variant='h6'>
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
