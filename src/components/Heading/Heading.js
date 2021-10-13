import React, { useEffect, useState } from 'react';
import './Heading.css';

const Heading = () => {
    const [dates, setDates] = useState([]);
    const getDate = () => {
        const d = new Date();
        return d.toString();
    }
    useEffect(() => {
        setDates(getDate());
    }, []);

    return (
        <div className="heading shadow-lg">
            <p>Task Information Updated On: <span className="text-secondary">{dates}</span></p>
        </div>
    );
};

export default Heading;