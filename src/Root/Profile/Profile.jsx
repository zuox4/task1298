import React, {useEffect} from 'react';
import {getSessionToken, useSession, useUser} from "@descope/react-sdk";
import axios from "axios";
import ModalReg from "../ModalReg.jsx";
import {useOutletContext} from "react-router-dom";
import LogoutButton from "../Logout.jsx";

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
        axios.get('http://127.0.0.1:5000/get_user', {
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
        isAuthenticated&&!loading&& <div style={{display:"flex", flexDirection:"row"}}>
            <ModalReg isOpen={open} setNickName={setNickName} setIsOpen={setIsOpen}/>
            <div className={'TasksPage'}>
                <LogoutButton/>
            </div>
                {/*<TaskShop/>*/}
            {/*<ul style={{padding: 0, display: "flex", flexDirection: "row", flexWrap: "wrap"}}>*/}
            {/*    <div style={{width: '90px', height: '200px', padding: '10px', backgroundColor: 'white'}}>*/}
            {/*        <img src={dataList.url} alt={''} style={{width: 'inherit'}}/>*/}
            {/*        <span>{dataList.name}</span>*/}
            {/*    </div>*/}
            {/*</ul>*/}

        </div>
    );
};

export default Profile;