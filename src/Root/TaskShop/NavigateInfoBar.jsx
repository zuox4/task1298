import React from 'react';
import PropTypes from 'prop-types';
import './Tasks.css';
import back from '../../assets/backarrow.svg';
import { useParams } from "react-router-dom";
import Input from "./taskspage.input.jsx";

const NavigateInfoBar = ({
                             fintElementText, // Исправлено имя переменной
                             setFintElementText,
                             setFilterTask,
                             openAllTasks,
                             setOpenAllTasks,
                             click,
                             name = null
                         }) => {
    // Деструктуризация props для более чистого использования

    return (
        <div className='nav-container'>
            {!openAllTasks && !name ? (
                <Input
                    text={fintElementText}
                    setText={setFintElementText}
                    setFiltered={setFilterTask}
                />
            ) : (
                <div className='navigate-bar'>
                    <img
                        src={back}
                        alt='Back'
                        onClick={click ? click : () => setOpenAllTasks(false)} // Условный рендеринг для onClick
                        style={{ cursor: 'pointer' }} // Возможно, добавить курсор для лучшего UX
                    />
                    <h3 style={{ margin: 0 }}>
                        {name ? name : 'Все задания'}
                    </h3>
                </div>
            )}
        </div>
    );
};


export default NavigateInfoBar;