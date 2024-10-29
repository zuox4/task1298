import React from 'react';
import logoprofile from '../../assets/logoprofile.svg'
import './MainInfo.css'
import reitinglogo from '../../assets/reitinglogo.svg'
import {useUser} from "@descope/react-sdk";

const MainInfo = () => {
    const {user} = useUser()
    return (
        <div className={'MainInfo'}>
            <img className={'logouser'} src={user.picture}/>

            <div className="info">

                <div className={'name'}>Найдюк Кирилл</div>
                <div className="className">9-В класс</div>
                <div className="reiting">
                    <img src={reitinglogo} alt={''}/>
                    <div className={'position'}>
                        <div className="number">912</div>
                        <div>место в школе</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;