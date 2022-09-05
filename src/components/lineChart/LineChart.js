import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Typography } from '@mui/material';
import { MainBox } from '../../assets/style/index'

const LineChart = () => {
    const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]
    const yValues = [61, 65, 80]
    const data = {
        labels: xValues,
        datasets: [
            {
                data: yValues,
                tension: 0.4,
                borderWidth: 1,
                pointBorderWidth: 2,
                borderColor: '#1A97DC',
                pointBorderColor: '#1A97DC',
                pointBackgroundColor: '#1A97DC',
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                stepSize: 5,
                suggestedMin: 50,
                suggestedMax: 90,
            },
        },
    }


    return (
        <MainBox sx={{ padding: '15px 10px' }}>
            <Typography
                mb={5}
                variant='h6'
                component='h6'
                sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' } }}
            >
                Graph of Visits/Admission
            </Typography>
            <Line
                data={data}
                options={options}
            />
        </MainBox>
    )
}

export default LineChart