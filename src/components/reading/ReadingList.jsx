import { Card, Container, Typography, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useSelector } from 'react-redux'
import BookItem from '../book/BookItem';

const ReadingList = () => {

    const pageReading=useSelector(state=>state.reading.pageReading);
    const useStyles=makeStyles({
        card:{
            width:'50%',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'3rem'
        }
    })

    const readingBooks=useSelector(state=>state.reading.items);

    const classes=useStyles();
        return (
        <Container style={{marginBottom:'3rem'}}>
            <Card className={classes.card}>
                <Typography variant='h6'>Total pages currently reading: {pageReading}</Typography>
            </Card>
        <Grid container spacing={4}>
            {readingBooks.map(book=>{
                return <Grid item xs={6} key={book.id}>
                    <BookItem id={book.id}
                    title={book.title} imageUrl={book.imageUrl}
                    description={book.description} pageCount={book.pageCount}/>
                </Grid>
            })}
        </Grid>
        </Container>
        )
    
}

export default ReadingList
