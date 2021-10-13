import { LinearProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useTasks from '../../hooks/useTasks';
import InCompletedTask from '../InCompletedTask/InCompletedTask';
import './InCompletedTasks.css';

const InCompletedTasks = () => {
    const [tasks] = useTasks();
    const [incompleted, setIncompleted] = useState([]);

    useEffect(() => {
        /* 
        // 1st way
        let falseArray = [];
        for (let falses of tasks) {
            if (falses.completed === true) {
                falseArray.push(falses);
            }
        }
        setCompleted(falseArray); */

        // 2nd way
        const foundFalse = tasks.filter(falses => falses.completed === false);
        setIncompleted(foundFalse);

    }, [tasks])

    return (
        <div>
            {
                incompleted.length === 0 ?
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                    </Stack>
                    :
                    <div className="container mx-auto row row-cols-md-1 row-cols-1">
                        <div className="col">
                            <div className="alert alert-primary">
                                <h4>Incomplete tasks: {incompleted.length}</h4>
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
                                            incompleted.map(incomp => <InCompletedTask incompletedTask={incomp} key={incomp.id} />)
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

export default InCompletedTasks;