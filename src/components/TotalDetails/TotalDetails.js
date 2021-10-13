import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './TotalDetails.css';
import useTasks from '../../hooks/useTasks';
import { Button } from '@mui/material';

const TotalDetails = () => {
    const { totalId } = useParams();
    const [tasks] = useTasks();
    const [task, setTask] = useState({});

    useEffect(() => {
        const foundTask = tasks.find(task => task.id === parseFloat(totalId));
        setTask(foundTask);
    }, [tasks, totalId]);

    let history = useHistory();
    const backToHome = () => {
        history.push(`/home`);
    }

    return (
        <div className="cards mt-2">
            <div className="cards-details">
                <div className="cards-header mb-5">
                    <h4>Task Id: {totalId}</h4>
                </div>
                <div className="cards-body my-5">
                    <p><b>Title</b>: {task?.title}</p>
                    <Button onClick={backToHome} variant="contained" className="my-5">Back</Button>
                </div>
            </div>
        </div>
    );
};

export default TotalDetails;