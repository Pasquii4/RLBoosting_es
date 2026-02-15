import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const WinLossChart = () => {
    const data = {
        labels: ['Wins', 'Losses'],
        datasets: [
            {
                data: [62, 38],
                backgroundColor: [
                    '#00D9FF', // Cyan
                    '#FF6B00', // Orange
                ],
                borderColor: [
                    '#00D9FF',
                    '#FF6B00',
                ],
                borderWidth: 0,
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        cutout: '75%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#0A0E27',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
            }
        },
    };

    return (
        <div className="relative w-48 h-48 mx-auto">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold font-title text-white">62%</span>
                <span className="text-xs text-rocket-textSecondary uppercase tracking-wider">Win Rate</span>
            </div>
        </div>
    );
};
