import { Box, Button, TextField } from "@mui/material"
import { styled } from '@mui/material/styles';

export const MrnBox = styled(Box)(({ theme }) => ({
    gap: '11px',
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
}))

export const MrnButton = styled(Button)(({ theme }) => ({
    width: '207px',
    height: '33px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
    borderRadius: '3px',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    [theme.breakpoints.down("md")]: {
        width: '120px',
        height: '30px',
        fontSize: '12px',
    }
}))

export const WarningBox = styled(Box)(({ theme }) => ({
    gap: '20px',
    height: '57px',
    display: 'flex',
    marginTop: '10px',
    paddingLeft: '23px',
    borderRadius: '5px',
    alignItems: 'center',
    background: '#F7F7F7',
    border: '2px solid #FF6363',
}))

export const TextFieldInput = styled(TextField)(({ theme }) => ({
    fontWeight: 400,
    fontSize: '13px',
    color: '#C1C1C1',
    lineHeight: '17px',
    fontStyle: 'normal',
    borderRadius: '3px',
    fontFamily: 'Poppins',
    border: '1px solid #CED4DA',
}))

//Search Button
export const SearchButton = styled(Button)(({ theme }) => ({
    width: '81px',
    height: '33px',
    color: '#FFFFFF',
    marginRight: '5px',
    borderRadius: '3px',
    background: '#2196F3',
    border: '1px solid #2196F3',
}))

//Assessment Buttons
export const Assessment = styled(Button)(({ theme }) => ({
    height: '27px',
    fontWeight: 400,
    color: '#FFFFFF',
    fontSize: '12px',
    lineHeight: '9px',
    fontStyle: 'normal',
    borderRadius: '3px',
    fontFamily: 'Poppins',
    background: '#FBC02D',
    border: '1px solid #FBC02D',
}))

//Input Fields
export const inputStyle = {
    width: '150px',
    height: '35px',
    margin: '0 6px',
    outline: 'none',
    fontWeight: 400,
    padding: '0 5px',
    fontSize: '13px',
    color: '#C1C1C1',
    lineHeight: '17px',
    fontStyle: 'normal',
    borderRadius: '3px',
    fontFamily: 'Poppins',
    border: '1px solid #CED4DA',
}


export const selectStyle = {
    width: '150px',
    height: '35px',
    margin: '0 6px',
    outline: 'none',
    fontWeight: 400,
    padding: '0 5px',
    fontSize: '13px',
    color: '#444444',
    lineHeight: '17px',
    fontStyle: 'normal',
    borderRadius: '3px',
    fontFamily: 'Poppins',
    border: '1px solid #CED4DA',
}