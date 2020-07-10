import React, { useState, useEffect } from 'react'
import Layout from '../componentes/Layout'
import Task from './Task'
import axios from 'axios'

const Home = () => {
    const [tasks, setTasks] = useState({})
    const getTask = () => {
        axios.get('https://ebriopes.firebaseio.com/rest/tasks.json')
            .then(({ data, status }) => {
                if (status === 200) {
                    setTasks(data)
                }
            })
            .catch(error => setTasks(error))
    }
    const showTask = () => {
        return (Object.keys(tasks).length === 0
            ? <h1>No hay tareas</h1>
            : Object.keys(tasks).map(task => <Task
                key={task}
                description={tasks[task].description}
                priority={tasks[task].priority}
                time={tasks[task].time}
                title={tasks[task].title}/>)
        )
    }
    useEffect(getTask, [])
    return (
        <Layout className="container mh-100" title="Home">
            {showTask()}
        </Layout>
    )
}
export default Home