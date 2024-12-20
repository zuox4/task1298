import React, {useCallback} from 'react';
import {useDescope} from "@descope/react-sdk";

const LogoutButton = () => {
    const { logout } = useDescope();
    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        <div className={'logout'} onClick={() => handleLogout()}>Выйти</div>
    );
};

export default LogoutButton;