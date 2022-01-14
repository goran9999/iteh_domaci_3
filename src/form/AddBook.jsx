import React from 'react'
import { Button, Card, Grid,TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
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
    
    
    return (
        <form className={classes.container}>
                <Card className={classes.card}>
                <Grid className={classes.grid} container spacing={4}>
                    <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Book title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Image url" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                    
                    </Grid>
                    <Grid item xs={12}>
                    <TextField id="outlined-multiline-static" label="Description" multiline rows={4}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.button} variant="contained">Save Book</Button>
                    </Grid>
                </Grid>
                </Card>

        </form>
    )
}

export default AddBook
