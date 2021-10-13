import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';


const CompletedTask = (props) => {
    const { completedTask } = props;
    const { id, completed } = completedTask;
    let history = useHistory();


    const detailHandler = () => {
        history.push(`completed-details/${id}`);
    }

    return (
        <tr className="table-custom-body green">
            <td>{id}</td>
            <td >{completed.toString()}</td>
            <td ><Button variant="contained" onClick={detailHandler}>Details</Button></td>
        </tr>
    );
};

export default CompletedTask;