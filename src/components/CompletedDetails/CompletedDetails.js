import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import { Button } from '@mui/material';
import './CompletedDetails.css';

const CompletedDetails = () => {
    const { completedId } = useParams();
    const [tasks] = useTasks();
    const [task, setTask] = useState({});

    useEffect(() => {
        const foundTask = tasks.find(task => task.id === parseFloat(completedId));
        setTask(foundTask);
    }, [tasks, completedId]);

    let history = useHistory();
    const backToHome = () => {
        history.push(`/home`);
    }

    return (
        <div className="cards mt-2">
            <div className="cards-details">
                <div className="cards-header mb-5">
                    <h4>Task Id: {completedId}</h4>
                </div>
                <div className="cards-body my-5">
                    <p><b>Title</b>: {task?.title}</p>
                    <Button onClick={backToHome} variant="contained" className="my-5">Back</Button>
                </div>
            </div>
        </div>
    );
};

export default CompletedDetails;