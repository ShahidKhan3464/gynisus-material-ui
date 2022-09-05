import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { RightBox, ImageBox, TextBox, LeftBox, Button } from '../style/index'
import { Image } from '../../../assets/style/index'
import hero from '../../../assets/images/hero.png'

const Hero = () => {

    return (
        <Container>
            <Stack
                mt={3}
                direction='row'
                justifyContent='space-between'
                sx={{ height: 164, background: '#1A97DC', flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RightBox ml={4}>
                    <ImageBox>
                        <Image alt='hero' src={hero} component='img' />
                    </ImageBox>
                    <TextBox>
                        <Typography
                            variant='h6'
                            component='h6'
                            sx={{ fontSize: { xs: '18px', sm: '24px' }, lineHeight: { xs: '100%', sm: '81%' } }}
                        >
                            Welcome Jessica Smith
                        </Typography>
                        <Typography
                            variant='p'
                            component='p'
                            sx={{ fontSize: { xs: '12px', sm: '18px' }, lineHeight: { xs: '100%' } }}
                        >
                            Actuarial Service Director
                        </Typography>
                    </TextBox>
                </RightBox>
                <LeftBox>
                    <Button component='button'>Log a Preauth</Button>
                    <Button component='button'>View all Preauth</Button>
                </LeftBox>
            </Stack>
        </Container>
    )
}

export default Hero