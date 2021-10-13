import { useState, useEffect } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/todos`;
        fetch(URL)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.log(err));
    }, []);

    return [tasks, setTasks];
};

export default useTasks;