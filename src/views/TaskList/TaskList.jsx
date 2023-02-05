import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TaskCard } from '../../components/task/TaskCard';
import { getTasks } from '../../services/apiCalls'

export const TaskList = () => {
    const authUser = useSelector(state => state.auth);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (tasks.length === 0) {
            getTasks(authUser.jwt)
                .then(res => {
                    setTasks(res.data);
                })
                .catch(error => console.log(error));;
        }

    }, [tasks, authUser])

    return (
        <div className='tasks-list'>
            <p>Tasks</p>
            {tasks.length > 0 ?
                (
                    tasks.map(task => {
                        // return (
                        return <div key={task.id}>
                            <TaskCard task={task} />
                        </div>
                        // )
                    })

                ) :
                (
                    <div>downloading...</div>
                )
            }

        </div>
    )
}
