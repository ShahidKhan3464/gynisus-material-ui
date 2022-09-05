import React from 'react'
import { Box, AppBar, Container, Toolbar, Avatar, Typography } from '@mui/material'
import { LogoBox, Image } from '../../../assets/style/index';
import user from '../../../assets/images/user.png'
import logo from '../../../assets/images/logo.png'

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ background: '#FFFFFF', boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.08)' }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <LogoBox>
                            <Image alt='logo' src={logo} component='img' />
                        </LogoBox>
                        <Box display='flex' alignItems='center' gap={1.5} >
                            <Avatar alt="user" src={user} />
                            <Typography
                                variant='p'
                                component='p'
                                sx={{ fontSize: '13px', color: '#2E2E2E' }}
                            >
                                David Smith
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}

export default Header