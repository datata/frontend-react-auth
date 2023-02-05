import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskCard } from '../../components/task/TaskCard';
import { updateTasks } from '../../feature/tasks/taskSlice';
import { getTasks } from '../../services/apiCalls'
import './TaskList.css'

export const TaskList = () => {
    const authUser = useSelector(state => state.auth);
    const taskUser = useSelector(state => state.task);
    const dispatch = useDispatch();

    useEffect(() => {
        if (taskUser.tasks.length === 0) {
            getTasks(authUser.jwt)
                .then(res => {
                    dispatch(updateTasks(res.data));
                })
                .catch(error => console.log(error));
        }

    }, [taskUser, authUser, dispatch])

    return (
        <div className='tasks-list'>
            <p>Tasks</p>
            {taskUser.tasks.length > 0 ?
                (
                    taskUser.tasks.map(task => {
                        return <div key={task.id}>
                            <TaskCard task={task} />
                        </div>
                    })

                ) :
                (
                    <div>downloading...</div>
                )
            }
        </div>
    )
}
