import React from 'react'
import { Container, Stack } from '@mui/material'
import { FooterBtn } from '../style'

const Footer = () => {

    return (
        <Container>
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ margin: { xs: '32px 0', sm: '64px 0' } }}
            >
                <FooterBtn
                    variant='outlined'
                    sx={{ color: '#1A97DC' }}
                >
                    Back
                </FooterBtn>
                <FooterBtn
                    sx={{ color: '#FFFFFF', background: '#1A97DC' }}
                >
                    Next
                </FooterBtn>
            </Stack>
        </Container >
    )
}

export default Footer