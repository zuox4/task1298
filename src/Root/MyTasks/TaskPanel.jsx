import React from 'react';

const TaskPanel = ({children}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={'task-panel'}>
            {
                children
            }
        </div>
    );
};

export default TaskPanel;