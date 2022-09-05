import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Header from './header/Header'
import PatientInfo from '../../components/patientInformation/PatientInfo'
import Validation from '../../components/validation/Validation'
import Premium from './premium/Premium'
import Report from './report/Report'
import Footer from './footer/Footer'

const index = () => {

    return (
        <>
            <Header />
            <Container>
                <Stack
                    mt={4}
                    mb={4}
                    gap={4}
                    direction='row'
                    sx={{ flexWrap: { xs: 'wrap', lg: 'nowrap' } }}
                >
                    <Box sx={{ width: '100%', maxWidth: '410px', margin: { xs: 'auto', md: 'none' } }}>
                        <PatientInfo />
                        <Premium />
                    </Box>
                    <Validation />
                </Stack>
            </Container>
            <Report />
            <Footer />
        </>
    )
}

export default index