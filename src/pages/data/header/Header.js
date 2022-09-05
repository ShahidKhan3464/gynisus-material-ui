import React from 'react'
import { Box, AppBar, Container, Toolbar, Badge } from '@mui/material'
import { LogoBox, Image } from '../../../assets/style/index';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
                        <Box
                            width={38}
                            height={36}
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            sx={{ background: 'rgba(26, 151, 220, 0.06)', borderRadius: '7px' }}
                        >
                            <Badge variant='dot' color="success">
                                <NotificationsIcon color="primary" />
                            </Badge>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}

export default Header