import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const MMRChart = () => {
    // Theme colors
    const rocketCyan = '#00D9FF';
    const rocketDark = '#0A0E27';
    const textSecondary = '#9CA3AF'; // gray-400

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
                backgroundColor: 'rgba(10, 14, 39, 0.95)',
                titleColor: rocketCyan,
                bodyColor: '#fff',
                borderColor: 'rgba(0, 217, 255, 0.2)',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                titleFont: {
                    family: 'Rajdhani',
                    size: 14,
                    weight: 'bold' as const
                },
                bodyFont: {
                    family: 'Inter',
                    size: 13
                },
                callbacks: {
                    label: (context: any) => `MMR: ${context.parsed.y}`
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    color: textSecondary,
                    font: {
                        family: 'Rajdhani',
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                    drawBorder: false,
                },
                ticks: {
                    color: textSecondary,
                    font: {
                        family: 'Rajdhani',
                        size: 12
                    }
                },
                min: 1500,
            },
        },
        interaction: {
            mode: 'nearest' as const,
            axis: 'x' as const,
            intersect: false
        },
    };

    const labels = ['Jan 1', 'Jan 5', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'];

    const data = {
        labels,
        datasets: [
            {
                label: 'MMR',
                data: [1540, 1565, 1550, 1590, 1610, 1605, 1642],
                borderColor: rocketCyan,
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(0, 217, 255, 0.2)');
                    gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');
                    return gradient;
                },
                tension: 0.4,
                fill: true,
                pointBackgroundColor: rocketDark,
                pointBorderColor: rocketCyan,
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: rocketCyan,
                pointHoverBorderColor: '#fff',
            },
        ],
    };

    return (
        <div className="w-full h-[300px]">
            <Line options={options} data={data} />
        </div>
    );
};
