import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { MainBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, WarningBox, Image } from '../../assets/style/index';
import Pagination from '../pagination/Paginations';
import warning from '../../assets/images/warning.png'

const LabTrend = () => {

    function createData(description, result, date, warning) {
        return { description, result, date, warning };
    }

    const tests = [
        createData('Weight', '205 Pounds^5 pounds', '2-20-2022 10:10', warning),
        createData('Blood Pressure', '140/90 mmhg', '3-20-2022 10:10', warning),
        createData('Blood Sugar (Fasting)', '100mg/dl', '2-10-2022 10:10', warning),
        createData('Weight', '140/90 mmhg', '3-20-2022 10:10', warning),
        createData('Blood Pressure', '100mg/dl', '2-10-2022 10:10', warning),
    ];

    return (
        <MainBox>
            <TableContainer>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' }, padding: '15px 10px' }}
                >
                    Lab Test Trends
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Test Description</TableHeadCell>
                            <TableHeadCell>Test Result</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {tests.map((test, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {test.description}
                                </TableBodyCell>
                                <TableBodyCell>{test.result}</TableBodyCell>
                                <TableBodyCell>{test.date}</TableBodyCell>
                                <TableBodyCell>
                                    <WarningBox>
                                        <Image alt='logo' src={test.warning} component='img' />
                                    </WarningBox>
                                </TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination />
            </TableContainer >
        </MainBox>
    )
}

export default LabTrend