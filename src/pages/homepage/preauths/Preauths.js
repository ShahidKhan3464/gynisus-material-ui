import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { TableBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow } from '../../../assets/style/index';
import Pagination from '../../../components/pagination/Paginations';

const Preauths = () => {

    function createData(requested, type, urgency, status, createdon) {
        return { requested, type, urgency, status, createdon };
    }

    const rows = [
        createData('2247', 'Inpatient Transplant', 'Elective', '', '11/12/2018 6:56PM EST'),
        createData('2265', 'Home Health aid social worker', 'Elective', '', '11/12/2018 6:56PM EST'),
        createData('2326', 'Home durable medical equipment', 'Emergency', '', '11/12/2018 6:56PM EST'),
        createData('2247', 'Home Hospice', 'Emergency', '', '11/12/2018 6:56PM EST'),
        createData('2326', 'Home hemodialysis', 'Elective', '', '11/12/2018 6:56PM EST'),
        createData('2326', 'Home durable medical equipment', 'Emergency', '', '11/12/2018 6:56PM EST'),
        createData('2326', 'Home infusion therapy', 'Elective', '', '11/12/2018 6:56PM EST'),
        createData('2356', 'Home infusion therapy', 'Elective', '', '11/12/2018 6:56PM EST'),
    ];

    return (
        <TableBox sx={{ overflow: 'auto' }}>
            <TableContainer>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ fontSize: { xs: '18px', sm: '24px' }, padding: '20px', color: '#1A97DC' }}
                >
                    My Preauths
                </Typography>
                <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Requested #</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                            <TableHeadCell>Urgency</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Created on</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    #{row.requested}
                                </TableBodyCell>
                                <TableBodyCell>{row.type}</TableBodyCell>
                                <TableBodyCell>{row.urgency}</TableBodyCell>
                                <TableBodyCell>{row.status}</TableBodyCell>
                                <TableBodyCell>{row.createdon}</TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination />
            </TableContainer >
        </TableBox>
    );
}

export default Preauths