import React from 'react';
import finder from '../../assets/finderinp.svg';

const Input = ({ text, setText, setFiltered }) => {

    const handleInputChange = (e) => {
        const value = e.target.value;
        setText(value);
        setFiltered(value.length > 0);
    };

    return (
        <div className="tasks-input">
            <img src={finder} alt="Finder" />
            <input
                type="text"
                placeholder="Найти задания"
                value={text}
                onChange={handleInputChange}
            />
        </div>
    );
};
export default Input;