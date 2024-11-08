import React, {useCallback, useEffect} from 'react';
import {useSession, useUser} from "@descope/react-sdk";
import './Tasks.css'
import Input from "./taskspage.input.jsx";
import CategoriesMenu from "./CategoriesMenu.jsx";
import ButtonOpenAll from "./ButtonOpenAll.jsx";
import AllTasksList from "./AllTasksList.jsx";
import NavigateInfoBar from "./NavigateInfoBar.jsx";
import {tasks1} from "../../../data.js";
const Tasks = () => {

    const [fintElementText, setFintElementText] = React.useState("");
    const [openAllTasks, setOpenAllTasks] = React.useState(false);
    const [filterTask, setFilterTask] = React.useState(false);
    const [tasks, setTasks] = React.useState(tasks1);
    const [filteredTasks, setFilteredTasks] = React.useState([]);

    const filter = React.useCallback(() => {
        const filteredList = tasks.filter(task => {
            const titleMatch = task.title.toLowerCase().includes(fintElementText.toLowerCase());
            const hashtagsMatch = task.hashtags.some(tag => tag.toLowerCase().includes(fintElementText.toLowerCase()));
            return titleMatch || hashtagsMatch;
        });
        setFilteredTasks(filteredList);
    }, [tasks, fintElementText]);

    React.useEffect(() => {
        filter();
    }, [filter, fintElementText, tasks]);

    return (
    <>
            <NavigateInfoBar
                setFilterTask={setFilterTask}
                openAllTasks={openAllTasks}
                fintElementText={fintElementText}
                setFintElementText={setFintElementText}
                setOpenAllTasks={setOpenAllTasks}/>
            {!openAllTasks&&!filterTask&&<CategoriesMenu/>}
            <div className={'all-tasks'}>
                {(!openAllTasks&&fintElementText==='')&&<ButtonOpenAll setOpenAllTasks={setOpenAllTasks} openAllTasks={openAllTasks} />}
                {(openAllTasks||filterTask)&&<AllTasksList data={filteredTasks}/>}
            </div>
    </>
    );
};

export default Tasks;