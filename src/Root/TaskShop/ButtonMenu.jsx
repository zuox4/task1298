import React from 'react';
import { useNavigate } from "react-router-dom";

const ButtonMenu = ({ name, src, path }) => {
    const navigate = useNavigate(); // Используется для навигации

    return (
        <img
            className="category-button__img"
            src={src}
            alt={`Button for ${name}`} // Улучшение доступности
            onClick={() => navigate(path, { state: { name } })} // Корректная передача имени
        />
    );
};


export default ButtonMenu;