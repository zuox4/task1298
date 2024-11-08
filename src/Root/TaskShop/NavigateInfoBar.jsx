import React, {useEffect} from 'react';
import './Tasks.css'
import back from '../../assets/backarrow.svg'
import {useParams} from "react-router-dom";
import Input from "./taskspage.input.jsx";

const NavigateInfoBar = ({fintElementText, setFintElementText, setFilterTask, openAllTasks, setOpenAllTasks, click, name, }) => {
    useEffect(() => {
        console.log(openAllTasks)
    }, [openAllTasks]);
    return (
            <div className={'nav-conteiner'}>

                {!openAllTasks?<Input text={fintElementText} setText={setFintElementText} setFiltered={setFilterTask}/>
                    :<div className={'navigate-bar'}>
                        <img src={back} alt={''} onClick={click?click:()=>setOpenAllTasks(false)}/>
                        <h3 style={{margin:0}} >{name?name:'Все задания'}</h3>
                    </div>
                }</div>
    );
};

export default NavigateInfoBar;