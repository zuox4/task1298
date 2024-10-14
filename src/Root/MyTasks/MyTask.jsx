import React from 'react';
import './MyTask.css'
import TaskContent from "./TaskContent.jsx";
import Task from "./Task.jsx";

const MyTask = () => {
    return (
        <div className={'Left'}>
            <div className={'MyTasks'}>

                <TaskContent name={'В работе'}>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>

                    <Task id={1} taskName={'Заявка 1'}/>

                    <Task id={1} taskName={'Заявка 1'}/>

                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>
                    <Task id={1} taskName={'Заявка 1'}/>


                </TaskContent>
                <TaskContent name={'Выполненые'}>
                    <Task id={2} taskName={'Заявка 2'}/>
                </TaskContent>
                <TaskContent name={'Архив'}>
                    <Task id={3} taskName={'Заявка 3'}/>
                </TaskContent>
            </div>

        </div>
    );
};

export default MyTask;