import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="nav">
            <a href="/" className="heading-text">TO-DO LIST</a>
            <div className="options">
                <NavLink to="/home"><i className="fas fa-home"></i></NavLink>
                <NavLink to="/tasks"><i className="fas fa-tasks"></i></NavLink>
                <NavLink to="/completed-tasks"><i className="fas fa-calendar-check"></i></NavLink>
                <NavLink to="/incompleted-tasks"><i className="fas fa-times-circle"></i></NavLink>
            </div>
        </div>
    );
};

export default Header;