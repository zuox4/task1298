import React from 'react';
import {useNavigate} from "react-router-dom";


const ButtonMenu = ({ name, src, style, path }) => {
    const navigate = useNavigate();
    return (
            // <div className="category-button" style={style&&style} >
                src&&<img className="category-button__img" src={src} alt={''} onClick={()=>navigate(path)} />
            // </div>
    );
};

export default ButtonMenu;