import logo from '../assets/logo.svg'
import './Header.css'

const Header = ({ nickName}) => {

    return (
        <div className={'header'}>
            <img src={logo} alt={''}/>
            <div className={'infocoins'}>
                12312 KCoins
            </div>
            {/*<div className={'about-user'}>*/}
            {/*    <div className={'nick-name'}>{nickName}</div>*/}
            {/*    /!*<LogoutButton/>*!/*/}
            {/*    <div style={{width:'40px', height:'40px', background:'gray', borderRadius:'100px'}}></div>*/}
            {/*</div>*/}

        </div>
    );
};

export default Header;