import React from 'react'
import { Container, Stack } from '@mui/material'
import total from "../../assets/images/total.png"
import Card from '../card/Card'

const Cards = () => {

    const createData = (title, quantity, icon) => {
        return { title, quantity, icon };
    }

    const cards = [
        createData("Weekly Total", '25', total),
        createData("Avg Processings", '1 Days', total),
        createData("Completed", '55%', total),
        createData("Open PreAuths", '10', total),
        createData("Overdue", '0', total),
    ];

    return (
        <Container>
            <Stack
                gap="25px"
                direction='row'
                sx={{
                    flexWrap: { xs: 'wrap', lg: 'nowrap' },
                    justifyContent: { xs: 'center', lg: 'flex-start' },
                    marginTop: { xs: '50px', sm: '80px' }
                }}
            >
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            title={card.title}
                            quantity={card.quantity}
                            icon={card.icon}
                        />
                    )
                })}
            </Stack>
        </Container >
    )
}

export default Cards