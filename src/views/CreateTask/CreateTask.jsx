import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../feature/tasks/taskSlice';
import { createTask } from '../../services/apiCalls';
import './CreateTask.css';

export const CreateTask = () => {
    const authUser = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [createTaskData, setCreateTaskData] = useState({
        title: "",
        description: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await createTask(createTaskData, authUser.jwt)
        
        if(!result) {
            alert('Somethig went wrong');
        } else {
            dispatch(logout())
            navigate('/tasks')
        }
    }

    function createTaskDataHandle(e) {
        setCreateTaskData({
            ...createTaskData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className="create-task-form">
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="name">name:</label> */}
                    <div>
                        <input type="text" name='title' className="create-task-input" onChange={createTaskDataHandle} placeholder="title" required />
                    </div>
                    {/* <label htmlFor="email">email:</label> */}
                    <div>
                        <input type="text" name='description' className="create-task-input" onChange={createTaskDataHandle} placeholder="description" required />
                    </div>
                    <button className="create-task-button">Create task</button>
                </form>
            </div>
        </div>
    )
}
