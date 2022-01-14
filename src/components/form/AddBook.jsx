import React from 'react'
import { Button, Card, Grid,TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useDispatch } from 'react-redux'
import { bookActions } from '../../slice/book-slice'
import { useRef } from 'react'
const AddBook = () => {
    
    const useStyles=makeStyles({
        container:{
            marginTop:'3rem',
            width:'50%',
            marginLeft:'auto',
            marginRight:'auto'
        },
        card:{
            padding:'50px'
        },
        button:{
            width:'200px'
        },
        input:{
            marginLeft:'50px',

        },
        grid:{
            width:'80%'
        }
    })

    const classes=useStyles();
    const dispatch=useDispatch();
    const titleRef=useRef();
    const imageUrlRef=useRef();
    const descRef=useRef();
    const pageRef=useRef();

    

    const saveBook = (event) =>{
        event.preventDefault();
       
        const book={
            id:new Date().toISOString(),
            title:titleRef.current.value,
            imageUrl:imageUrlRef.current.value,
            pageCount:pageRef.current.value,
            description:descRef.current.value
        }
       
        dispatch(bookActions.addBook({book:book}))
       
    }
    
    return (
        <form onSubmit={saveBook} className={classes.container}>
                <Card className={classes.card}>
                <Grid className={classes.grid} container spacing={4}>
                    <Grid item xs={12}>
                    <TextField inputRef={titleRef} id="outlined-basic" label="Book title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField inputRef={imageUrlRef} id="outlined-basic" label="Image url" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField inputRef={pageRef} id="outlined-number" type="number" label="Page count" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField inputRef={descRef} id="outlined-multiline-static" label="Description" multiline rows={4}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' className={classes.button} variant="contained">Save Book</Button>
                    </Grid>
                </Grid>
                </Card>

        </form>
    )
}

export default AddBook
