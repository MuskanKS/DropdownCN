import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = () => {

    const [isDropdownActive, setDropdownActive] = useState(false);
    const [options] = useState(['Yes', 'Probably not']);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (e) => {
        setSelectedOption(e.target.textContent);
        setDropdownActive(false);
    }

    const handleMouseEnter = () => {
        setDropdownActive(true);
    }

    const optionElements = options.map((option, index) => {
        return <a href="#" onClick={handleOptionClick} key={index}>{option}</a>;
    })

    return (
        <div className="dropdown-container">
            <h1>Should you use a dropdown?</h1>
            <h3>{selectedOption}</h3>
            <button className="dropdown-button" onMouseEnter={handleMouseEnter}>Select</button>
            <div className="dropdown-content" style={{ display: `${isDropdownActive ? 'block' : 'none'}` }}>
                {optionElements}
            </div>
        </div>
    );
}

export default Dropdown;
