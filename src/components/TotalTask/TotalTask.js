import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';


const TotalTask = (props) => {
    const { totalTask } = props;
    const { id, completed } = totalTask;
    let history = useHistory();


    const detailHandler = () => {
        history.push(`total-details/${id}`);
    }

    return (
        <tr className="table-custom-body green">
            <td>{id}</td>
            <td >{completed.toString()}</td>
            <td ><Button variant="contained" onClick={detailHandler}>Details</Button></td>
        </tr>
    );
};

export default TotalTask;