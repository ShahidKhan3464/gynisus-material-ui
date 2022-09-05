import React from 'react'
import { Stack, Box, Divider, Typography } from '@mui/material'
import { MainBox } from '../../../assets/style/index'
import TaskData from '../taskData/TaskData'

const Task = () => {

    return (
        <MainBox sx={{ width: '100%', maxWidth: '410px' }}>
            <Stack
                p={2.5}
                direction='row'
                justifyContent='space-between'
            >
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '18px', sm: '24px' } }}
                >
                    My Tasks
                </Typography>
                <Typography
                    variant="p"
                    component='p'
                    sx={{ fontSize: { xs: '16px', sm: '20px' }, color: '#2E2E2E' }}
                >
                    1 to 5
                    <Box
                        ml={1}
                        component='span'
                        sx={{ color: '#747474' }}
                    >
                        of 9
                    </Box>
                </Typography>
            </Stack>
            <Divider />
            <TaskData />
        </MainBox >
    )
}

export default Task