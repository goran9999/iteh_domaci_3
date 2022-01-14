import { Grid } from '@mui/material'
import React from 'react'
import BookItem from './BookItem'
import { makeStyles } from '@mui/styles';

const BookItemList = (props) => {

  
    const useStyles=makeStyles({
        container:{
          textAlign:'center',
          marginTop:'3rem',
          marginBottom:'3rem'
        }
    })
    
    const classes=useStyles();

    return (
        <Grid className={classes.container} container spacing={6}>
            {props.books.map(book=>{
                return <Grid item xs={4} key={book.id}>
                    <BookItem 
                    title={book.title}
                    description={book.description}
                    imageUrl={book.imageUrl}/>
                </Grid>
            })}
        </Grid>
    )
}

export default BookItemList
