import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import NavigateInfoBar from "../NavigateInfoBar.jsx";

const CategoryPage = () => {
    const {categoryId} = useParams();
    const navigate = useNavigate();
    const {state} = useLocation()
    
    return (
        <>
            <NavigateInfoBar click={() => navigate(-1)} name={state.name}/>
            Категория N{state.name}
        </>

    );
};

export default CategoryPage;