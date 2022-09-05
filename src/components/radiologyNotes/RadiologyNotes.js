import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { MainBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status } from '../../assets/style/index';
import Pagination from '../pagination/Paginations';

const RadiologyNotes = () => {

    function createData(name, procedure, date, status) {
        return { name, procedure, date, status };
    }

    const radiologyNotes = [
        createData('Glucogan', '742220', '2-20-2022', 'Active'),
        createData('Prinivil Lisinopril', '742220', '3-20-2022', 'Inactive'),
        createData('Vitamin D', '742220', '2-10-2022', 'Active'),
        createData('Prinivil Lisinopril', '742220', '4-20-2022', 'Inactive'),
        createData('Vitamin D', '742220', '5-20-2022', 'Active'),
    ];

    return (
        <MainBox>
            <TableContainer>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' }, padding: '15px 10px' }}
                >
                    Radiology Notes
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Medication Name</TableHeadCell>
                            <TableHeadCell>Procedure</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {radiologyNotes.map((note, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {note.name}
                                </TableBodyCell>
                                <TableBodyCell>{note.procedure}</TableBodyCell>
                                <TableBodyCell>{note.date}</TableBodyCell>
                                <TableBodyCell>
                                    <Status
                                        variant='p'
                                        component='p'
                                        sx={{
                                            color: `${note.status === 'Active' ? '#33C70E' : '#C70E0E'}`,
                                            background: `${note.status === 'Active' ? '#CBFFC2' : '#FFC2C2'}`,
                                        }}
                                    >
                                        {note.status}
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

export default RadiologyNotes