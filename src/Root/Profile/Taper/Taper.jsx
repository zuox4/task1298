import React, {useEffect, useState} from 'react';
import './Taper.css'
import { v4 as uuidv4 } from "uuid";
import vany from './VANYA.jpeg'
const Taper = () => {
    const [taps, setTaps] = React.useState(false)
    const [elements, setElements] = useState([]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const addElement = async () => {
        const container = document.querySelector(".elements-container");
        if (!container) return; // Проверка на существование контейнера

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const randomX = Math.floor(Math.random() * (containerWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - 200));

        const newElement = {
            id: uuidv4(),
            x: randomX,
            y: randomY,
        };

        setElements((prevElements) => [...prevElements, newElement]);

        // Добавляем задержку перед удалением
        await delay(600);

        // Отфильтровываем элемент после задержки
        setElements((prevElements) => prevElements.filter(el => el.id !== newElement.id));
    };

    const startAnimation = async (event) => {
        addElement()
        const circle = event.target;
        circle.classList.add("animate");

        // Используем промис для ожидания завершения анимации
        await new Promise((resolve) =>
            setTimeout(resolve, 100) // Время таймаута должно совпадать с длительностью анимации
        );

        circle.classList.remove("animate");
    };

    return (
        <div className={'Taper'}>
            <h1 onClick={addElement} style={{fontFamily:'Inter'}}>Тапаем дядю ваню</h1>
            <div className="elements-container"  >
                {elements.map((element) => (
                    <div key={element.x}  className="element" style={{left: `${element.x}px`, top: `380px`}}>
                        +1
                    </div>
                ))}
            </div>



                <img className={'homyak'} src={vany} onClick={startAnimation}/>

        </div>
    );
};

export default Taper;