import React from 'react';
import './ModalQuestion.css'

const ModalQuestion = ({openModal, setOpenModal}) => {
    return (
        <div>
            <div className="modal-question">
                <div className={'modal-question-conteiner'}>
                    <h3>Подтвержение</h3>
                    <div className={'question-tocustomer'} style={{backgroundColor:'#d3d3d3c4'}}><a href={'https://web.vk.me/convo/835326231'}>Обсудить с заказчиком</a></div>
                    <div className={'confirm'} style={{backgroundColor:'orange'}}>Подтвердить</div>
                    <span onClick={()=>setOpenModal(false)}>Закрыть</span>
                </div>
            </div>
        </div>
    );
};

export default ModalQuestion;