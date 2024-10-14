import React from 'react';
import {useSession, useUser} from "@descope/react-sdk";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ elem }) => {
    const { isUserLoading } = useUser();
    const { isAuthenticated, isSessionLoading } = useSession();

    if (isUserLoading || isSessionLoading) {
        return <div className={'load'}><div className="loader"></div>
            </div>; // Предоставляем пользователю индикатор загрузки
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return elem; // Если пользователь аутентифицирован, отображаем защищенный элемент
};

export default ProtectedRoute;