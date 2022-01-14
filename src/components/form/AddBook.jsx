import React from 'react'
import { Button, Card, Grid,TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useDispatch } from 'react-redux'
import { bookActions } from '../../slice/book-slice'
import { useNavigate } from 'react-router'
import { useRef } from 'react'
const AddBook = () => {
    
    const useStyles=makeStyles({
        container:{
            marginTop:'3rem',
            width:'50%',
            marginLeft:'auto',
            marginRight:'auto',
            
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
    const navigate=useNavigate();
    

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
        navigate('/all-books');
       
    }
    
    return (
        <form  onSubmit={saveBook} className={classes.container}>
                <Card  className={classes.card}>
                <Grid className={classes.grid} container spacing={4}>
                    <Grid item xs={12}>
                    <TextField style={{width:'400px'}} inputRef={titleRef} id="outlined-basic" label="Book title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField style={{width:'400px'}} inputRef={imageUrlRef} id="outlined-basic" label="Image url" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField style={{width:'400px'}} inputRef={pageRef} id="outlined-number" type="number" label="Page count" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField style={{width:'400px'}} inputRef={descRef} id="outlined-multiline-static" label="Description" multiline rows={4}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button style={{width:'400px'}} type='submit' className={classes.button} variant="contained">Save Book</Button>
                    </Grid>
                </Grid>
                </Card>

        </form>
    )
}

export default AddBook
