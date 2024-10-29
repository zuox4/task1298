import React from 'react';
import './Tasks.css'
import back from '../../assets/backarrow.svg'
import {useParams} from "react-router-dom";

const NavigateInfoBar = ({setOpenAllTasks, click, name}) => {

    return (

            <div className={'navigate-bar'} style={{

            }}>
                    <img src={back} alt={''} onClick={click?click:()=>setOpenAllTasks(false)}/>
                    <h3 style={{margin:0}} >{name?name:'Все задания'}</h3>
            </div>

    );
};

export default NavigateInfoBar;