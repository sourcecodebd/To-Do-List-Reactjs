import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';


const InCompletedTask = (props) => {
    const { incompletedTask } = props;
    const { id, completed } = incompletedTask;
    let history = useHistory();


    const detailHandler = () => {
        history.push(`incompleted-details/${id}`);
    }

    return (
        <tr className="table-custom-body red">
            <td>{id}</td>
            <td >{completed.toString()}</td>
            <td ><Button variant="contained" color="error" onClick={detailHandler}>Details</Button></td>
        </tr>
    );
};

export default InCompletedTask;