import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            Ошибка! Что то пошло не так!
            <Link to={'/'}>НАЗАД</Link>
        </div>
    );
};

export default ErrorPage;