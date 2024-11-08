import React from 'react';
import Task from "./Task/Task.jsx";
import './Tasks.css'

const AllTasksList = ({ filterTask, data }) => {
    return (
        <div
            className={'all-task-list'}>
            {data.map((task, index) => (
                <div key={index}>
                    <Task task={task}/>
                </div>
            ))}
        </div>
    );
};

export default AllTasksList;