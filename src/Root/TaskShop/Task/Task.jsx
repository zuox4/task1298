import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Task.css'; // Предполагается, что CSS-файл существует и стилей в компонентах будет минимум
import clock from '../../../assets/clock.svg';
import confirm from '../../../assets/confirm.svg';
import firstLogo from '../../../assets/categories/first.svg';
import win from '../../../assets/win.svg';
import buy from '../../../assets/buy.svg';
import molniya from '../../../assets/molniya.svg';
import usuLogo from '../../../assets/categories/ushu.svg';
import schoolActivLogo from '../../../assets/categories/schoolactivities.svg';
import epicentrLogo from '../../../assets/categories/epicentr.svg';
import classLogo from '../../../assets/categories/classHelp.svg';
import othersLogo from '../../../assets/categories/others.svg';
import mediaLogo from '../../../assets/categories/mediachildren.svg';
import ModalQuestion from './ModalQuestion.jsx';

const Task = ({ task }) => {
    useEffect(() => {
        console.log('перерисовка');
    }, []);

    const logos = useMemo(() => ({
        1: usuLogo,
        2: schoolActivLogo,
        3: epicentrLogo,
        4: classLogo,
        5: firstLogo,
        6: othersLogo,
        7: mediaLogo,
    }), []);

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="Task">
            {isModalOpen && (
                <ModalQuestion isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            )}
            <div className="infoTask" style={{ gridTemplateColumns: !task.urgency && '1fr 1fr' }}>
                {task.urgency && (
                    <img className="urgency-icon" src={molniya} alt="Urgency indicator" />
                )}
                <span className="hashtags">
                    {task.hashtags.map(tag => `#${tag} `)}
                </span>
                <div className="customer">
                    <span>{task.author}</span>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <h3>{task.title}</h3>
                    <div className={`details ${isOpen ? 'open' : 'closed'}`}>
                        {task.description}
                    </div>
                </div>
                <img
                    className="buy-logo"
                    src={buy}
                    alt="Purchase task"
                    onClick={() => setIsModalOpen(true)}
                />
            </div>
            <p
                className="toggle-details"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'свернуть' : 'развернуть'}
            </p>
            <div className="footerTask">
                <div className="time-details">
                    <img src={clock} alt="Clock icon" />
                    <span>{task.date}</span>
                </div>
                <div className="permission-details">
                    <img src={confirm} alt="Confirmation icon" />
                    <span>{task.requiresConfirmation ? 'Требует согласования' : 'Без согласования'}</span>
                </div>
                <div className="reward-details">
                    <img src={win} alt="Reward icon" />
                    <span>{task.reward}</span>
                </div>
            </div>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        urgency: PropTypes.bool,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        requiresConfirmation: PropTypes.bool.isRequired,
        reward: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default Task;