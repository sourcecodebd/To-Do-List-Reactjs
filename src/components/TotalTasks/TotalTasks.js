import { LinearProgress, Stack } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';
import useTasks from '../../hooks/useTasks';
import TotalTask from '../TotalTask/TotalTask';
import './TotalTasks.css';

const TotalTasks = () => {
    const [tasks] = useTasks();

    return (
        <div>
            {
                tasks.length === 0 ?
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                    </Stack>
                    :

                    <div className="container mx-auto row row-cols-md-1 row-cols-1">
                        <div className="col">
                            <div className="alert alert-primary">
                                <h4>Total tasks: {tasks.length}</h4>
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
                                            tasks.map(tot => <TotalTask totalTask={tot} key={tot.id} />)
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

export default TotalTasks;