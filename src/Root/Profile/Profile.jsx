import React, {useEffect} from 'react';
import {getSessionToken, useSession, useUser} from "@descope/react-sdk";
import axios from "axios";
import ModalReg from "../ModalReg.jsx";
import {useOutletContext} from "react-router-dom";
import LogoutButton from "../Logout.jsx";
import MainInfo from "./MainInfo.jsx";
import './Profile.css'
import ConfirmTaskInfoButton from "../MyTasks/ConfirmTaskInfoButton.jsx";
import ListOptions from "./ListOptions.jsx";
import Option from "./Option.jsx";
import Taper from "./Taper/Taper.jsx";
const Profile = () => {
    const {isAuthenticated} = useSession();
    const {user} = useUser()
    const [nickName, setNickName] = useOutletContext()
    const [loading, setLoading] = React.useState(false);
    const [open, setIsOpen] = React.useState(false);
    const sessionToken = getSessionToken()
    const [categories, setCategories] = React.useState([])

    useEffect(() => {
        setLoading(true)
        axios.get('/get_user', {
            headers: {
                Authorization: 'Bearer ' + sessionToken,
                Accept: 'application/json',
            }
        })
            .then(data=>{
                if(data.data.user){
                    setNickName(data.data.user.userName);
                    setIsOpen(false)
                    console.log('sdccd')
                }
                else
                    setIsOpen(true)})
            .catch(e=>console.log(e));

        setLoading(false)
    }, []);


    return (
        isAuthenticated&&!loading&&
        <>
            <ModalReg isOpen={open} setNickName={setNickName} setIsOpen={setIsOpen}/>
            <div className="Profile">
                <MainInfo/>
                <ConfirmTaskInfoButton/>
                <ListOptions>
                    <Option elem={<LogoutButton/>}/>

                </ListOptions>
                <Taper/>
            </div>

        </>








    );
};

export default Profile;