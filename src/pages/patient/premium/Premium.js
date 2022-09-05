import React from 'react'
import { Box, Typography } from '@mui/material'
import { MainBox } from '../../../assets/style/index'

const Premium = () => {
    const premium = [
        {
            key: 'Current Coverage Type',
            value: 'Premium'
        },
        {
            key: 'Renewal Date',
            value: '20/2/2022'
        },
        {
            key: 'Previous Coverage Type',
            value: 'Premium'
        }
    ]

    return (
        <MainBox mt={2.5}>
            {
                premium.map((data, index) => (
                    <Box
                        key={index}
                        p='15px 10px'
                        display='flex'
                        justifyContent='space-between'
                    >
                        <Typography
                            variant='p'
                            component='p'
                            sx={{ fontSize: { xs: '12px', sm: '16px', color: '#838383' } }}
                        >
                            {data.key}
                        </Typography>
                        <Typography
                            variant='p'
                            component='p'
                            sx={{ fontSize: { xs: '12px', sm: '16px', color: '#444444' } }}
                        >
                            {data.value}
                        </Typography>
                    </Box>
                ))}
        </MainBox>
    )
}

export default Premium