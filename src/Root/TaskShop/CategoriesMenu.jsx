import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getSessionToken} from "@descope/react-sdk";
import './Categories.css'
import ButtonMenu from "./ButtonMenu.jsx";
import epicentrLogo from "../../assets/categories/epicentr.svg"
import firstLogo from "../../assets/categories/first.svg"
import mediaLogo from "../../assets/categories/mediachildren.svg"
import schoolActivLogo from "../../assets/categories/schoolactivities.svg"
import usuLogo from "../../assets/categories/ushu.svg"
import othersLogo from "../../assets/categories/others.svg"
import classLogo from "../../assets/categories/classHelp.svg"

const CategoriesMenu = ()=>  {
    const [loading, setLoading] = useState(true);
    const sessionToken = getSessionToken();
    const [categories, setCategories] = useState([]);
    const logos = {
        'УШУ':usuLogo,
        'Школьные дела':schoolActivLogo,
        'Волонтерство':epicentrLogo,
        'Классная помощь': classLogo,
        'Движение первых':firstLogo,
        'Общие':othersLogo,
        'Медиа дети':mediaLogo }

    function getCategories(){
        setLoading(true)
        axios.get('http://127.0.0.1:5000/categories', {
            headers: {
                Authorization: 'Bearer ' + sessionToken,
                Accept: 'application/json',
            }
        })
            .then(data=>{
                setCategories(data.data.categories)
            })
            .catch(e=>console.log(e));
        setLoading(false)
    }

    useEffect(() => {
        getCategories()
        setLoading(false)
    }, []);
    return (
        !loading&&<div className={'CategoriesMenu'}>
                {categories.map(c => <ButtonMenu key={c.name} name={''} path={'categories/'+c.id} src={logos[c.name]}/>)}
        </div>
    );
};

export default CategoriesMenu;