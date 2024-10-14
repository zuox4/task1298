import React from 'react';
import info from '../../assets/info.svg'

const Task = ({id, taskName}) => {
    return (
        <div className={'user-task'}>
            <span>{taskName}</span>
            <img style={{width:'20px'}} src={info} alt='task' />
        </div>
    );
};

export default Task;