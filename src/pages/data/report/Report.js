import * as React from 'react';
import { Container, Grid } from '@mui/material';
import PatientInfo from '../../../components/patientInformation/PatientInfo'
import Validation from '../validationTable/Table';
import ReportedClaims from '../../../components/reportedClaims/ReportedClaims'
import ClinicalNotes from '../../../components/clinicalNotes/ClinicalNotes';
import Medications from '../../../components/medications/Medications';
import RadiologyNotes from '../../../components/radiologyNotes/RadiologyNotes';
import LabTrend from '../../../components/labTrend/LabTrend';
import VitalTrend from '../../../components/vitalTrend/VitalTrend';
import WarningBox from '../warningBox/WarningBox';

const Report = () => {

    return (
        <Container>
            <Grid mb={2} container spacing={4}>
                <Grid item xs={12} lg={3}>
                    <PatientInfo />
                    <WarningBox />
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Validation />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ReportedClaims />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ClinicalNotes />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Medications />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <RadiologyNotes />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <LabTrend />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <VitalTrend />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Report