import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = () => {
    const [tasks, setTasks] = useState({});
    const [search, setSearch] = useState('');

    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/todos/${search}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
            .catch(err => console.log(err));
    }, [search])

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);
    }

    return (
        <div>
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input onChange={handleSearch} type="text" placeholder="Search" id="" />
            </div>
            <div className="container d-flex justify-content-center">
                {
                    tasks?.title ?
                        <div className="search-result">
                            {tasks.title}
                        </div>
                        :
                        ""
                }
            </div>
        </div >
    );
};

export default Search;