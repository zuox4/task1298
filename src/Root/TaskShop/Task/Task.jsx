import React, {useEffect, useMemo} from 'react';
import './Task.css'
import clock from '../../../assets/clock.svg'
import confirm from '../../../assets/confirm.svg'
import firstLogo from '../../../assets/categories/first.svg'
import win from '../../../assets/win.svg'
import buy from '../../../assets/buy.svg'
import molniya from '../../../assets/molniya.svg'
import usuLogo from "../../../assets/categories/ushu.svg";
import schoolActivLogo from "../../../assets/categories/schoolactivities.svg";
import epicentrLogo from "../../../assets/categories/epicentr.svg";
import classLogo from "../../../assets/categories/classHelp.svg";
import othersLogo from "../../../assets/categories/others.svg";
import mediaLogo from "../../../assets/categories/mediachildren.svg";
import ModalQuestion from "./ModalQuestion.jsx";

const Task = ({task})=> {

    const logos = useMemo(() => ({
        1: usuLogo,
        2: schoolActivLogo,
        3: epicentrLogo,
        4: classLogo,
        5: firstLogo,
        6: othersLogo,
        7: mediaLogo,
    }), []);
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <div className={'Task'}>
            {openModal&&<ModalQuestion openModal={openModal} setOpenModal={setOpenModal}/>}
            <div className={'infoTask'} style={{gridTemplateColumns:!task.urgency&&'1fr 1fr'}}>
                {task.urgency&&<img style={{width:'10px', marginRight:'5px'}} src={molniya} alt={''}/>}
                {/*<img src={logos[task['categoryId']]} alt={''}/>*/}
                <span className={'hashteger'}>{task.hashtags.map(tag=>tag + ' ')}</span>
                <div className={'customer'}><span>{task.author}</span></div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'4px', alignItems:'center'}}>
                <div className={'content'}>
                    <h3 style={{margin: 0}}>{task.title}</h3>
                    <div className={open?'deteils':'deteils animated'} style={{height: !open ? '25px' : 'fit-content'}}>
                        {task.description}
                    </div>
                </div>
                <img className={'buy-logo'} src={buy} alt={''} onClick={()=>setOpenModal(true)}/>
            </div>

            <p onClick={() => setOpen(!open)} style={{
                fontSize: '10px',
                margin: '0',
                marginTop:'3px',
                marginBottom: '3px',
                textDecoration: 'underline'
            }}>{!open ? 'развернуть' : 'свернуть'}</p>
            <div className={'footerTask'}>
                <div className={'time'}>
                    <img src={clock} alt={''}/>
                    <span>{task.date}</span>
                </div>
                <div className={'permission'}>
                    <img src={confirm} alt={''}/>
                    <span>{task.requiresConfirmation?'Требует согласования':'Без согласования'}</span>
                </div>
                <div className={'permission'}>
                    <img src={win} alt={''}/>
                    <span>{task.reward}</span>

                </div>
            </div>
        </div>
    );
};

export default Task;