import React, { useEffect, useState } from 'react';
import { getSessionToken } from "@descope/react-sdk";
import './Categories.css';
import ButtonMenu from "./ButtonMenu.jsx";
import epicentrLogo from "../../assets/categories/epicentr.svg";
import firstLogo from "../../assets/categories/first.svg";
import mediaLogo from "../../assets/categories/mediachildren.svg";
import schoolActivLogo from "../../assets/categories/schoolactivities.svg";
import usuLogo from "../../assets/categories/ushu.svg";
import othersLogo from "../../assets/categories/others.svg";
import classLogo from "../../assets/categories/classHelp.svg";
import { axiosApi } from "../../../api.js";

const CategoriesMenu = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const sessionToken = getSessionToken();

    const logos = {
        'УШУ': usuLogo,
        'Школьные дела': schoolActivLogo,
        'Волонтерство': epicentrLogo,
        'Классная помощь': classLogo,
        'Движение первых': firstLogo,
        'Общие': othersLogo,
        'Медиа дети': mediaLogo
    };

    // Использование async/await для получения категорий
    const getCategories = async () => {
        try {
            setLoading(true);
            const { data } = await axiosApi.get('/categories', {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                    Accept: 'application/json',
                }
            });
            setCategories(data.categories);
        } catch (error) {
            console.error('Error loading categories:', error);
        } finally {
            setLoading(false); // Устанавливаем loading в false только после завершения получения данных
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Может быть красивый индикатор загрузки
    }

    return (
        <div className="CategoriesMenu">
            {categories.map(c => (
                <ButtonMenu key={c.id} name={c.name} path={`../categories/${c.id}`} src={logos[c.name]} />
            ))}
        </div>
    );
};

export default CategoriesMenu;