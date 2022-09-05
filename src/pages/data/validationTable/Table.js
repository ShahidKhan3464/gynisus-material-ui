import * as React from 'react';
import { Box, Button, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { TableBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status } from '../../../assets/style/index';
import Pagination from '../../../components/pagination/Paginations';

const Validation = () => {

    function createData(detectedDiagnosis, detectedIn, icd10, drg, date, status) {
        return { detectedDiagnosis, detectedIn, icd10, drg, date, status };
    }

    const rows = [
        createData('Anemia', 'Clinical Notes', 'D64', '812', '2-20-2022', 'Active'),
        createData('Live Cirrhosis', 'Lab Test Report', 'K74.60', '438', '3-20-2022', 'Inactive'),
        createData('Type 2 Diabetes Mellitus', 'Claims', 'E11', '638', '2-10-2022', 'Active'),
        createData('Anemia', 'Clinical Notes', 'D64', '812', '4-20-2022', 'Inactive'),
        createData('Live Cirrhosis', 'Lab Test Report', 'K74.60', '438', '5-20-2022', 'Active'),
    ];

    return (
        <TableBox>
            <TableContainer>
                <Typography
                    variant='p'
                    component='p'
                    sx={{ fontSize: '13px', padding: '16px 10px', color: '#1A97DC' }}
                >
                    Validated Medical Conditions
                    <Box component='span' color='#959595'> - (Diagnosis, Medical Hx, Historical Dx, Procedures) - </Box>
                    <Box component='span' color='#FF5353'> Alerts & Notification </Box>
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Detected Diagnosis</TableHeadCell>
                            <TableHeadCell>Detected In</TableHeadCell>
                            <TableHeadCell>ICD-10</TableHeadCell>
                            <TableHeadCell>DRG</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Action</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {row.detectedDiagnosis}
                                </TableBodyCell>
                                <TableBodyCell>{row.detectedIn}</TableBodyCell>
                                <TableBodyCell>{row.icd10}</TableBodyCell>
                                <TableBodyCell>{row.drg}</TableBodyCell>
                                <TableBodyCell>{row.date}</TableBodyCell>
                                <TableBodyCell>
                                    <Status
                                        variant='p'
                                        component='p'
                                        sx={{
                                            color: `${row.status === 'Active' ? '#33C70E' : '#C70E0E'}`,
                                            background: `${row.status === 'Active' ? '#CBFFC2' : '#FFC2C2'}`,
                                        }}
                                    >
                                        {row.status}
                                    </Status>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Box display='flex' gap={1}>
                                        <Status
                                            sx={{
                                                width: '60px',
                                                height: '30px',
                                                color: '#FFFFFF',
                                                borderRadius: '3px',
                                                background: '#33C70E',
                                            }}
                                        >
                                            Approve
                                        </Status>
                                        <Status
                                            sx={{
                                                width: '60px',
                                                height: '30px',
                                                color: '#FFFFFF',
                                                borderRadius: '3px',
                                                background: '#D32F2F',
                                            }}
                                        >
                                            Decline
                                        </Status>
                                    </Box>
                                </TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination />
            </TableContainer >
        </TableBox>
    );
}

export default Validation