import React from 'react';
import './styles.css';
const Switch = () => {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
};

export default Switch;
