import React from 'react'
import { Box, Divider, Typography } from '@mui/material';
import accepted from '../../../assets/images/accepted.png'
import assigned from '../../../assets/images/assigned.png'
import { Image } from '../../../assets/style/index';

const TaskData = () => {

    function createData(title, date, icon, status) {
        return { title, date, icon, status };
    }

    const taskData = [
        createData('Create or Edit Application', 'Received Dec 12 at 4:46 PM', accepted, 'Accepted'),
        createData('Create or Edit Application', 'Received Dec 12 at 4:46 PM', accepted, 'Accepted'),
        createData('Review Pendign Preauthorization #2345', 'Received Dec 12 at 4:46 PM', assigned, 'Assigned'),
        createData('Review Pendign Preauthorization #2345', 'Received Dec 12 at 4:46 PM', assigned, 'Assigned'),
        createData('Review Pendign Preauthorization #2345', 'Received Dec 12 at 4:46 PM', assigned, 'Assigned'),
    ];

    return (
        <>
            {
                taskData.map((data, index) => (
                    <>
                        <Box key={index} p={2.5} >
                            <Typography
                                mb={1.5}
                                variant='p'
                                component='h6'
                                sx={{ fontSize: { xs: '14px', sm: '18px' }, color: '#1A97DC' }}
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                mb={1.5}
                                variant='p'
                                component='p'
                                sx={{ fontSize: { xs: '12px', sm: '14px' }, color: '#838383' }}
                            >
                                {data.date}
                            </Typography>
                            <Box
                                gap={1.5}
                                display='flex'
                                alignItems='center'
                            >
                                <Box sx={{ width: '20px', height: '20px' }}>
                                    <Image alt={data.status} src={data.icon} component='img' />
                                </Box>
                                <Typography
                                    variant='p'
                                    component='p'
                                    sx={{ fontSize: { xs: '12px', sm: '14px' }, color: '#838383' }}
                                >
                                    {data.status}
                                </Typography>
                            </Box>
                        </Box>
                        {taskData.length !== index + 1 ? <Divider /> : null}
                    </>
                ))
            }
        </>
    )
}

export default TaskData