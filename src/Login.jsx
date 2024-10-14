import React, {useEffect} from 'react';
import {Descope, useSession} from "@descope/react-sdk";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const {isAuthenticated} = useSession()
    useEffect(() => {
        if(isAuthenticated) {
            navigate("/profile")
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            {!isAuthenticated&&<Descope
                flowId={'sign-up-or-in'}
                onSuccess={(e) => {

                    navigate("/profile");
                    console.log("Logged in!");
                }}
                onError={(e) => console.log("Error!")}
                redirectAfterSuccess="/profile"
            />}
        </div>
    );
};

export default Login;