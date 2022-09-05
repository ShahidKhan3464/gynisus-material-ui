import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { MainBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status } from '../../assets/style/index';
import Pagination from '../pagination/Paginations';

const Medications = () => {

    function createData(name, ndc, date, status) {
        return { name, ndc, date, status };
    }

    const medications = [
        createData('Glucogan', '0002-8031-01', '2-20-2022', 'Active'),
        createData('Prinivil Lisinopril', '0006-0207-57', '3-20-2022', 'Inactive'),
        createData('Vitamin D', '64380-737-06', '2-10-2022', 'Active'),
        createData('Prinivil Lisinopril', '0006-0207-57', '4-20-2022', 'Inactive'),
        createData('Vitamin D', '64380-737-06', '5-20-2022', 'Active'),
    ];

    return (
        <MainBox>
            <TableContainer>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' }, padding: '15px 10px' }}
                >
                    Reported Claims
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Medication Name</TableHeadCell>
                            <TableHeadCell>NDC</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {medications.map((medication, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {medication.name}
                                </TableBodyCell>
                                <TableBodyCell>{medication.ndc}</TableBodyCell>
                                <TableBodyCell>{medication.date}</TableBodyCell>
                                <TableBodyCell>
                                    <Status
                                        variant='p'
                                        component='p'
                                        sx={{
                                            color: `${medication.status === 'Active' ? '#33C70E' : '#C70E0E'}`,
                                            background: `${medication.status === 'Active' ? '#CBFFC2' : '#FFC2C2'}`,
                                        }}
                                    >
                                        {medication.status}
                                    </Status>
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

export default Medications