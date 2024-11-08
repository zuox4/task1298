import React from 'react';
import {useNavigate} from "react-router-dom";


const ButtonMenu = ({ name, src, style, path }) => {
    const navigate = useNavigate();

    return (
        <>
            <img className="category-button__img" src={src} alt={''}
                 onClick={() => navigate(path, {state: {name: name}})}/>
        </>


    );
};

export default ButtonMenu;