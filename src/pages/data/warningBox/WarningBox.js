import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image } from '../../../assets/style/index'
import warning2 from '../../../assets/images/warning2.png'
import { WarningBox } from '../style/index'

const WarningBoxes = () => {

    return (
        <>
            <WarningBox>
                <Box width={20} height={17}>
                    <Image alt='warning' src={warning2} component='img' />
                </Box>
                <Typography
                    sx={{
                        color: '#000000',
                        fontSize: { xs: '14px', sm: '18px' },
                    }}
                >
                    CPR : Yes
                </Typography>
            </WarningBox >
            <WarningBox>
                <Box width={20} height={17}>
                    <Image alt='warning' src={warning2} component='img' />
                </Box>
                <Typography
                    sx={{
                        color: '#000000',
                        fontSize: { xs: '14px', sm: '18px' },
                    }}
                >
                    Allergy : Pencilline
                </Typography>
            </WarningBox >
        </>
    )
}

export default WarningBoxes