import React from 'react';

const ButtonOpenAll = ({ setOpenAllTasks, openAllTasks }) => {
    const buttonStyle = {
        width: '100%',
        marginBottom: '10px',
        height: '50px',
        fontSize: '16px',
        fontWeight: '500',
        background: "rgb(255 223 141)",
        fontFamily: 'IBM Plex Sans',
        cursor: 'pointer', // добавим указатель для кликабельности
        display: 'flex',
        alignItems: 'center', // центруем текст по вертикали
        justifyContent: 'center', // центруем текст по горизонтали
        textTransform: 'uppercase',

    };

    return (
        <div className={'category-button'} onClick={() => setOpenAllTasks(!openAllTasks)} style={buttonStyle}>
            Показать все задания
        </div>
    );
};

export default ButtonOpenAll;