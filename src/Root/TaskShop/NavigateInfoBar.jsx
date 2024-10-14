import React from 'react';
import './Tasks.css'
import back from '../../assets/backarrow.svg'

const NavigateInfoBar = ({setOpenAllTasks}) => {
    return (

            <div className={'navigate-bar'} style={{

            }}>
                    <img src={back} alt={''} onClick={()=>setOpenAllTasks(false)}/>
                    <h3 style={{margin:0}} >Все задания</h3>
            </div>

    );
};

export default NavigateInfoBar;