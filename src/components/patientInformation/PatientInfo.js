import React from 'react'
import { Divider, Typography } from '@mui/material'
import { MainBox } from '../../assets/style/index'
import PatientData from '../patientData/PatientData'

const PatientInfo = () => {

    return (
        <MainBox sx={{ marginBottom: { xs: '16px', lg: '0px' } }}>
            <Typography
                variant='h6'
                component='h6'
                sx={{ color: '#1A97DC', fontSize: { xs: '14px', sm: '16px' }, padding: '15px 10px' }}
            >
                Patient Information
            </Typography>
            <Divider />
            <PatientData />
        </MainBox>
    )
}

export default PatientInfo