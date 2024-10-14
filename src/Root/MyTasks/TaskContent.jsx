import React from 'react';
import TaskPanel from "./TaskPanel.jsx";

const TaskContent = ({name, children}) => {
    return (
        <div className={"TaskContent"}>
            <h3>{name}</h3>
            <TaskPanel>
                {children}
            </TaskPanel>
        </div>
    );
};

export default TaskContent;