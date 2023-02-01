import React from 'react'
import './TaskCard.css'

export const TaskCard = (props) => {
    const handleStatusChange = () => {
        console.log('handleStatusChange');
    }

    return (
        <div>
            <div className='task-card'>
                <label className="task-list-label" htmlFor="title">Title</label>
                <div>{props.task.title}</div>
                <label className="task-list-label" htmlFor="description">Description</label>
                <div>{props.task.description}</div>
                <input type="checkbox" checked={props.task.status} onChange={handleStatusChange} />
            </div>
        </div>
    )
}
