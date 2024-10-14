import React from 'react';
import axios from "axios";
import './ModalReg.css'
import {getSessionToken} from "@descope/react-sdk";

const ModalReg = ({ isOpen, setIsOpen, setNickName }) => {
    const sessionToken = getSessionToken();
    const [name, setName] = React.useState("");

    function handleSaveButton(){
        axios.post('http://127.0.0.1:5000/create_user',{username:name}, {
            headers: {
                Authorization: 'Bearer ' + sessionToken,
                Accept: 'application/json',
            }}).then(data=>{
            console.log(data.data.user.userName)
            setNickName(name)
            setIsOpen(false)
        }).catch(err=>{console.log(err)})
    }

    return (

            isOpen&&<div className={'modal'}>
                <div className={'modal-content'}>

                    <h3>Добро пожаловать в приложение</h3>
                    <h3>Для продолжения<br/>
                        Введите никнейм:</h3>
                    <input onChange={e => setName(e.target.value)} value={name}/>
                    <button onClick={handleSaveButton}>Сохранить</button>
                </div>
            </div>


    );
};

export default ModalReg;