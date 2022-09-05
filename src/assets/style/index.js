import { Box, TableCell, TableRow, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';

//MainBox
export const MainBox = styled(Box)(({ theme }) => ({
    borderRadius: '5px',
    background: '#FFFFFF',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08)',
}))

//Image Tag
export const Image = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}))

//Image Boxes
export const FileBox = styled(Box)(({ theme }) => ({
    width: '24px',
    height: '24px',
}))

export const WarningBox = styled(Box)(({ theme }) => ({
    width: '27px',
    height: '27px',
    [theme.breakpoints.down("sm")]: {
        width: '24px',
        height: '24px',
    }
}))

export const LogoBox = styled(Box)(({ theme }) => ({
    width: '142px',
    height: '39px',
    [theme.breakpoints.down("sm")]: {
        width: '100px',
        height: '30px',
    }
}))

//Table
export const TableBox = styled(Box)(({ theme }) => ({
    borderRadius: '5px',
    background: '#FFFFFF',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08) !important',
}))

export const TableHeadRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
}));

export const TableBodyRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const TableHeadCell = styled(TableCell)(({ theme }) => ({
    fontSize: '14px',
    color: '#444444',
    fontWeight: '400',
    lineHeight: '81%',
    fontStyle: 'normal',
    padding: '15px 10px',
    fontFamily: 'Poppins',
    [theme.breakpoints.down("sm")]: {
        fontSize: '12px',
        lineHeight: '100%',
        padding: '15px 8px',
    }
}))

export const TableBodyCell = styled(TableCell)(({ theme }) => ({
    fontSize: '13px',
    color: '#747474',
    fontWeight: '400',
    lineHeight: '81%',
    fontStyle: 'normal',
    padding: '22px 10px',
    fontFamily: 'Poppins',
    [theme.breakpoints.down("sm")]: {
        fontSize: '11px',
        lineHeight: '100%',
        padding: '12px 8px',
    }
}))

//Status
export const Status = styled(Typography)(({ theme }) => ({
    width: '86px',
    height: '22px',
    display: 'flex',
    fontSize: '12px',
    borderRadius: '11px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {
        width: '70px',
        height: '20px',
        fontSize: '11px',
    }
}))

//Pagination
export const PaginationText = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: '#747474',
    padding: '30px 10px',
}))

//Top Fitness Box
export const TopFitnessBox = styled(Box)(({ theme }) => ({
    height: '65px',
    display: 'flex',
    padding: '0 16px',
    marginBottom: '40px',
    alignItems: 'center',
    background: '#1A97DC',
    justifyContent: 'space-between',
    borderRadius: '5px 5px 0px 0px',
}))