import React from 'react'
import { Box, AppBar, Container, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { LogoBox, Image } from '../../../assets/style/index';
import { LinkBox } from '../style/index';
import logo from '../../../assets/images/logo.png'

const Header = () => {
    const pages = ['home', 'patient', 'data', 'authorization'];

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
                        <LinkBox>
                            {pages.map((page) => (
                                <Typography
                                    key={page}
                                    href={page === 'home' ? '/' : `${page}`}
                                    variant='a'
                                    component='a'
                                    sx={{ color: `${page === 'Home' ? '#1A97DC' : '#747474'}` }}
                                >
                                    {page}
                                </Typography>
                            ))}
                        </LinkBox>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ width: '32px', height: '24px', color: '#1A97DC' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}

export default Header