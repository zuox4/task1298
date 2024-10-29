import React from 'react';
import LogoutButton from "../Logout.jsx";
import next from '../../assets/next.svg'
const Option = ({elem, nav}) => {
    return (
        <div className={'button-option'}>
            {elem}
            {nav&&<img src={next} style={{width:'10px', height:'10px'}} />}
        </div>
    );
};

export default Option;