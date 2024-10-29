import React from 'react';
import Task from "./Task/Task.jsx";

const AllTasksList = ({ filterTask, data }) => {
    return (
        <div
            className={'all-task-list'}
            style={{ marginBottom: '100px', alignItems: 'center', marginTop: filterTask ? '15px' : '70px', display: 'flex', flexDirection: 'column', gap: '25px', overflow: 'hidden' }}
        >
            {data.map((task, index) => (
                <div key={index}>
                    {/* Здесь вы можете отобразить свойства задачи, например: */}
                    <Task task={task}/>
                </div>
            ))}
        </div>
    );
};

export default AllTasksList;