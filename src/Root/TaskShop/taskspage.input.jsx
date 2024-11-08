import React from 'react';
import PropTypes from 'prop-types';
import finder from '../../assets/finderinp.svg';

const Input = ({ text, setText, setFiltered }) => {

    const handleInputChange = (e) => {
        const value = e.target.value;
        setText(value);

        // Упростим условие с помощью тернарного оператора
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

// Добавим проверки типов с PropTypes
Input.propTypes = {
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    setFiltered: PropTypes.func.isRequired,
};

export default Input;