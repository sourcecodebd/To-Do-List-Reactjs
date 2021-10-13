import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import useTasks from '../../hooks/useTasks';

const ComposeChart = () => {
    const [tasks] = useTasks();

    return (
        <>
            <ComposedChart
                width={300}
                height={200}
                data={tasks}
                margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                    width: '50%'
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="id" scale="band" />
                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="title" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="userId" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="title" stroke="#ff7300" />
            </ComposedChart>
        </>

    );
}


export default ComposeChart;