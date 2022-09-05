import React from 'react'
import { Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './header/Header';
import Hero from "./hero/Hero";
import Cards from "../../components/cards/Cards";
import Task from "./task/Task";
import Preauths from "./preauths/Preauths";

const MainStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    [theme.breakpoints.down("sm")]: {
        gap: '30px'
    }
}))

const index = () => {

    return (
        <>
            <Header />
            <Hero />
            <Cards />
            <Container>
                <MainStack
                    mt={4}
                    mb={8}
                    gap={6}
                    direction='row'
                >
                    <Task />
                    <Preauths />
                </MainStack>
            </Container>
        </>
    )
}

export default index