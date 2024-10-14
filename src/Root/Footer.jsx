import React from 'react';
import finder from '../assets/finder.svg'
import './Footer.css'
import profile from '../assets/prifle.svg'
import edit from '../assets/edit.svg'
import statistic from '../assets/statistic.svg'
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className={'footer'}>
            <img src={finder} alt={''} onClick={()=>navigate('tasks')}/>
            <img src={edit} alt={''}/>
            <img src={statistic} alt={''}/>
            <img src={profile} alt={''} onClick={()=>navigate('profile')}/>
        </div>
    );
};

export default Footer;