import React from 'react';
import finder from '../../assets/finderinp.svg'

const Input = ({text, setText, setFiltered}) => {
    function filterTask(e) {
        setText(e.target.value)
        if(e.target.value.length > 0) {
            setFiltered(true)
        }
        else{
            setFiltered(false)
        }
    }
    return (
        <div className={'tasks-input'}>
            <img src={finder} alt="Finder" />
            < input type={'text'} placeholder={'Найти задания'} value={text} onChange={(e) => filterTask(e)} />
        </div>
    );
};

export default Input;