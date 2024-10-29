import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import NavigateInfoBar from "../NavigateInfoBar.jsx";

const CategoryPage = () => {
    const {categoryId} = useParams();
    const navigate = useNavigate();
    const {state} = useLocation()
    
    return (
        <div style={{marginTop:'80px', width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>

                <NavigateInfoBar click={() => navigate(-1)} name={state.name}/>
                Категория N{categoryId}

        </div>
    );
};

export default CategoryPage;