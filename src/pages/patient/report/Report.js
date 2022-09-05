import * as React from 'react';
import { Container, Grid } from '@mui/material';
import ReportedClaims from '../../../components/reportedClaims/ReportedClaims'
import ClinicalNotes from '../../../components/clinicalNotes/ClinicalNotes';
import Medications from '../../../components/medications/Medications';
import RadiologyNotes from '../../../components/radiologyNotes/RadiologyNotes';
import LabTrend from '../../../components/labTrend/LabTrend';
import VitalTrend from '../../../components/vitalTrend/VitalTrend';
import LineChart from '../../../components/lineChart/LineChart';

const Report = () => {

    return (
        <Container>
            <Grid mb={2} container spacing={4}>
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
                <Grid item xs={12} lg={6}>
                    <LineChart />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <LineChart />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Report