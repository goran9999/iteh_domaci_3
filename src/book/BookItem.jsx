import React from 'react'
import {Card, CardActions, CardContent, CardHeader, CardMedia, Icon, IconButton, Typography} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { makeStyles } from '@mui/styles';
const BookItem = (props) => {

    const useStyles=makeStyles({
        media: {           
            height: 320,     
            width: '30%',
           
            
          },
          card:{
              width:'300px',
              marginLeft:'100px',
              marginTop:'50px'
          }
    })

    const classes=useStyles();

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
                <IconButton>
                    <Icon><MenuBookIcon/></Icon>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default BookItem
