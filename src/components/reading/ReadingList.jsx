import { Card, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ReadingList = () => {

    const pageReading=useSelector(state=>state.reading.pageReading);

        return (
        <Container>
            <Card>
                <Typography variant='h6'>Total pages currently reading:{pageReading}</Typography>
            </Card>
        </Container>
        )
    
}

export default ReadingList
