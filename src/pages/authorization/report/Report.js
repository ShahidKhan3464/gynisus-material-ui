import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { MainBox } from '../../../assets/style'
import { styled } from '@mui/material/styles';

const AuthBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-between',
    [theme.breakpoints.down("sm")]: {
        alignItems: 'center',
        flexDirection: 'column',
    }
}))

const ButtonStyle = styled(Button)(({ theme }) => ({
    width: '76px',
    height: '33px',
    color: '#FFFFFF',
    borderRadius: '3px',
}))

const Report = () => {

    const obj1 = [
        {
            key: 'Examination Dates:',
            value: 'May 8-13'
        },
        {
            key: 'Insured Name:',
            value: 'Smith, Jessica'
        },
        {
            key: 'MR No:',
            value: '5500126'
        },
    ]

    const obj2 = [
        {
            key: 'Requested Dates:',
            value: 'Glucagon (peptide-1 receptor agonists)'
        },
        {
            key: 'Recommendation:',
            value: 'Decline'
        },
        {
            key: 'Alternative:',
            value: ''
        },
    ]

    const obj3 = [
        {
            key: 'Requested Dates:',
            value: 'WBC Panel'
        },
        {
            key: 'Recommendation:',
            value: 'Approved'
        },
        {
            key: 'Alternative:',
            value: ''
        },
    ]

    return (
        <MainBox
            p={1.5}
            sx={{
                width: '100%',
                margin: '30px auto',
                maxWidth: { sm: '700px', md: '850px' },
            }}
        >
            <Box mb={4} display='flex' justifyContent='space-between'>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ fontSize: { xs: '16px', sm: '20px' }, color: '#1F72CD' }}
                >
                    Gynisus Prior Authorization Report
                </Typography>
                <Button
                    sx={{
                        width: '130px',
                        height: '33px',
                        color: '#FFFFFF',
                        fontSize: { xs: '10px', sm: '14px' },
                        borderRadius: '3px',
                        background: '#2196F3',
                        border: '1px solid #2196F3',
                    }}
                >
                    Export to CSV</Button>
            </Box>

            {obj1.map((data, index) => (
                <AuthBox key={index}>
                    <Typography
                        mb={2.5}
                        variant='h6'
                        component='h6'
                        sx={{ fontSize: { xs: '16px', sm: '20px' }, color: '#444444' }}
                    >
                        {data.key}
                    </Typography>
                    <Typography
                        mb={2.5}
                        variant='h6'
                        component='h6'
                        sx={{ fontSize: { xs: '16px', sm: '20px' }, color: '#444444' }}
                    >
                        {data.value}
                    </Typography>
                </AuthBox>
            ))}
            <Divider mb={4} />

            {obj2.map((data, index) => (
                <AuthBox key={index}>
                    <Typography
                        mb={2.5}
                        variant='h6'
                        component='h6'
                        sx={{ fontSize: { xs: '16px', sm: '20px' }, textDecoration: 'underline', color: '#444444' }}
                    >
                        {data.key}
                    </Typography>
                    <Typography
                        mb={2.5}
                        variant='h6'
                        component='h6'
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            color: `${data.value === 'Decline' ? '#ED0006' : '#1A97DC'}`,
                            textDecoration: `${data.value === 'Decline' ? 'none' : 'underline'}`,
                        }}
                    >
                        {data.value}
                    </Typography>
                </AuthBox>
            ))}
            <Typography
                mb={2.5}
                variant='h6'
                component='h6'
                sx={{ fontSize: { xs: '14px', sm: '18px' }, color: '#747474' }}
            >
                1.Thiazolidinediones
            </Typography>
            <Typography
                mb={2.5}
                variant='h6'
                component='h6'
                sx={{ fontSize: { xs: '14px', sm: '18px' }, color: '#747474' }}
            >
                2.Sulfonylureas
            </Typography>

            <Box mb={2.5} display='flex' gap={1.5}>
                <ButtonStyle sx={{ background: '#FBBC04' }}>Accept</ButtonStyle>
                <ButtonStyle sx={{ background: '#D32F2F' }}>Decline</ButtonStyle>
                <ButtonStyle sx={{ background: '#FBBC04' }}>Revised</ButtonStyle>
            </Box>
            <Divider mb={4} />

            {obj3.map((data, index) => (
                <AuthBox key={index}>
                    <Typography
                        mb={2.5}
                        variant='h6'
                        component='h6'
                        sx={{ fontSize: { xs: '16px', sm: '20px' }, textDecoration: 'underline', color: '#444444' }}
                    >
                        {data.key}
                    </Typography>
                    <Typography
                        mb={2.5}
                        variant='h6'
                        component='h6'
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            color: `${data.value === 'Approved' ? '#33C70E' : '#1A97DC'}`,
                            textDecoration: `${data.value === 'Approved' ? 'none' : 'underline'}`,
                        }}
                    >
                        {data.value}
                    </Typography>
                </AuthBox>
            ))}
            <Typography
                mb={2.5}
                variant='h6'
                component='h6'
                sx={{ fontSize: { xs: '14px', sm: '18px' }, color: '#747474' }}
            >
                1.T Cells (5$)
            </Typography>
            <Box
                gap={1.5}
                display='flex'
                sx={{ justifyContent: { xs: 'center', sm: 'start' } }}
            >
                <ButtonStyle sx={{ background: '#FBBC04' }}>Accept</ButtonStyle>
                <ButtonStyle sx={{ background: '#D32F2F' }}>Decline</ButtonStyle>
                <ButtonStyle sx={{ background: '#FBBC04' }}>Revised</ButtonStyle>
            </Box>
        </MainBox >
    )
}

export default Report