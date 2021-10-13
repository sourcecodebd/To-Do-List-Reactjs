import { LinearProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useTasks from '../../hooks/useTasks';
import CompletedTask from '../CompletedTask/CompletedTask';
import './CompletedTasks.css';

const CompletedTasks = () => {
    const [tasks] = useTasks();
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        /* 
        // 1st way
        let trueArray = [];
        for (let trues of tasks) {
            if (trues.completed === true) {
                trueArray.push(trues);
            }
        }
        setCompleted(trueArray); */

        // 2nd way
        const foundTrue = tasks.filter(trues => trues.completed === true);
        setCompleted(foundTrue);

    }, [tasks])

    return (
        <div>
            {
                completed.length === 0 ?
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                    </Stack>
                    :
                    <div className="container mx-auto row row-cols-md-1 row-cols-1">
                        <div className="col">
                            <div className="alert alert-primary">
                                <h4>Complete tasks: {completed.length}</h4>
                            </div>
                            <div className="table-custom">
                                <Table responsive>
                                    <thead className="table-custom-header">
                                        <tr>
                                            <th>id</th>
                                            <th >Completed</th>
                                            <th >Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            completed.map(comp => <CompletedTask completedTask={comp} key={comp.id} />)
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                    </div>
            }
        </div >
    );
};

export default CompletedTasks;