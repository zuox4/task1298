import React from 'react';
import {Outlet} from "react-router-dom";
import {useUser} from "@descope/react-sdk";
import './Root.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Root = () => {
    const {user, isUserLoading } = useUser();
    const [nickName, setNickName] = React.useState("");
    return (


            !isUserLoading&& <div className={'main-layout'} style={{height: '100vh', display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
            <Header nickName={user.familyName} />
                <div className="App-conteiner">
                    <Outlet context={[nickName, setNickName]}/>
                </div>
            <Footer/>
            {/*<CategoriesMenu/>*/}
            </div>


    );
};

export default Root;