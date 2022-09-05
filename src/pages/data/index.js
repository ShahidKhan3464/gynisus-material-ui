import React from 'react'
import { Container, Stack } from '@mui/material'
import Header from './header/Header'
import Mrn from './mrn/Mrn'
import Report from './report/Report'
import Fitness from './fitness/Fitness'
import Assesment from './profileAssessment/Assesment'
import LineGrpah from './lineGraph/index'

const index = () => {

    return (
        <>
            <Header />
            <Container>
                <Stack
                    mt={4}
                    mb={3}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: { xs: '8px', sm: '0px' } }}
                >
                    <Mrn />
                </Stack>
            </Container>
            <Report />
            <Fitness />
            <Assesment />
            <LineGrpah />
        </>
    )
}

export default index