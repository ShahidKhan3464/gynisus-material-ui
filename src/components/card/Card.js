import React from 'react'
import { Box, Typography } from '@mui/material'
import { CardBox, IconBox } from '../../pages/homepage/style/index'
import { Image } from '../../assets/style/index'

const Card = ({ title, quantity, icon }) => {

    return (
        <CardBox>
            <Box>
                <Typography
                    variant='p'
                    component='p'
                    sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                    {title}
                </Typography>
                <Typography
                    mt={2.5}
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '18px', sm: '24px' } }}
                >
                    {quantity}
                </Typography>
            </Box>
            <IconBox>
                <Image alt='total' src={icon} component='img' />
            </IconBox>
        </CardBox >
    )
}

export default Card