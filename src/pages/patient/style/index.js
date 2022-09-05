import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';

export const FooterBtn = styled(Button)(({ theme }) => ({
    width: '146px',
    height: '55px',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '132%',
    borderRadius: '4px',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    border: '2px solid #1A97DC',
    [theme.breakpoints.down("sm")]: {
        width: '80px',
        height: '40px',
        fontSize: '12px',
    }
}))