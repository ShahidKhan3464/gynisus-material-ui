import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';

//Navbar links
export const LinkBox = styled(Box)(({ theme }) => ({
    gap: '50px',
    width: '100%',
    height: '39px',
    display: 'flex',
    maxWidth: '458px',
    alignItems: 'center',
    [theme.breakpoints.down("lg")]: {
        display: 'none'
    }
}))

//Hero
export const RightBox = styled(Box)(({ theme }) => ({
    gap: '16px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
        paddingTop: '15px',
    }
}))

export const ImageBox = styled(Box)(({ theme }) => ({
    width: '188px',
    height: '188px',
    [theme.breakpoints.down("sm")]: {
        width: '100px',
        height: '80px',
    }
}))

export const TextBox = styled(Box)(({ theme }) => ({
    gap: '15px',
    display: 'flex',
    color: '#FFFFFF',
    flexDirection: 'column',
}))

export const LeftBox = styled(Box)(({ theme }) => ({
    gap: '12px',
    display: 'flex',
    marginRight: '20px',
    marginBottom: '20px',
    alignItems: 'flex-end',
    [theme.breakpoints.down("md")]: {
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    },
    [theme.breakpoints.down("sm")]: {
        margin: 'auto',
        flexWrap: 'nowrap',
    }
}))

export const Button = styled(Box)(({ theme }) => ({
    border: 'none',
    width: '171px',
    height: '50px',
    fontSize: '16px',
    color: '#1A97DC',
    lineHeight: '81%',
    fontWeight: '400',
    borderRadius: '5px',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    background: '#F8F8F8',
    textTransform: 'lowercase',
    "&:hover": {
        background: '#F8F8F8',
    },
    [theme.breakpoints.down("sm")]: {
        width: '110px',
        height: '35px',
        fontSize: '12px',
        flexWrap: 'nowrap',
    }
}))

//Card
export const CardBox = styled(Box)(({ theme }) => ({
    width: '238px',
    height: '100px',
    display: 'flex',
    borderRadius: '5px',
    padding: '25px 12px',
    background: '#FFFFFF',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.09)',
}))

export const IconBox = styled(Box)(({ theme }) => ({
    width: '50px',
    height: '50px',
    [theme.breakpoints.down("sm")]: {
        width: '40px',
        height: '40px',
    }
}))