import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskCard } from '../../components/task/TaskCard';
import './Home.css'

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log('useEffect home');
      navigate('/login');
    }

    if (tasks.length === 0) {
      fetch('http://localhost:8000/api/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
        .then((res) => {
          if (res.status === 401) {
            setToken('');
            localStorage.setItem('token', '')
            navigate('/login');
          } else {
            return res.json()
          }
        })
        .then((data) => {
          console.log(data);
          setTasks(data?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [tasks, token, navigate])

  return (
    <div>
      <h1>Task List</h1>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <TaskCard task={task} />
          </div>
        ))
      }
    </div>
  )
}
