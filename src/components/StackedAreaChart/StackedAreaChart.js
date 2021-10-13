import React from 'react';
import {
    Area,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
} from 'recharts';
import useTasks from '../../hooks/useTasks';

const StackedAreaChart = () => {
    const [tasks] = useTasks();

    return (
        <>
            <AreaChart
                width={250}
                height={200}
                data={tasks}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="userId" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="title" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="id" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </>

    );
}


export default StackedAreaChart;