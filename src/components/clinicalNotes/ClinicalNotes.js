import * as React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { MainBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status, Image, FileBox } from '../../assets/style/index';
import Pagination from '../pagination/Paginations';
import fileIcon from "../../assets/images/file.png"

const ClinicalNotes = () => {

    function createData(detectedDiagnosis, icd10, drg, date, status, file) {
        return { detectedDiagnosis, icd10, drg, date, status, file };
    }

    const rows = [
        createData('Anemia', 'D64', '812', '2-20-2022', 'Active', fileIcon),
        createData('Live Cirrhosis', 'K74.60', '438', '3-20-2022', 'Inactive', fileIcon),
        createData('Type 2 Diabetes Mellitus', 'E11', '638', '2-10-2022', 'Active', fileIcon),
        createData('Anemia', 'D64', '812', '4-20-2022', 'Inactive', fileIcon),
        createData('Live Cirrhosis', 'K74.60', '438', '5-20-2022', 'Active', fileIcon),
    ];

    return (
        <MainBox>
            <TableContainer>
                <Typography
                    variant='p'
                    component='p'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' }, padding: '15px 10px' }}
                >
                    Clinical Notes
                    <Box component='span' color='#959595'> - Medical Condition Detection</Box>
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Detected Diagnosis</TableHeadCell>
                            <TableHeadCell>ICD-10</TableHeadCell>
                            <TableHeadCell>DRG</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>File</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {row.detectedDiagnosis}
                                </TableBodyCell>
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
                                    <FileBox>
                                        <Image alt='logo' src={row.file} component='img' />
                                    </FileBox>
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

export default ClinicalNotes