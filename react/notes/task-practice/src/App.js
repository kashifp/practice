import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  // const name = 'Bob'
  // const bVal = true
  const [showAddTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Eat breakfast',
            day: 'Jun 15th',
            reminder: true
        },
        {
            id: 2,
            text: 'Eat lunch',
            day: 'Jun 16th',
            reminder: true
        },
        {
            id: 3,
            text: 'Eat dinner',
            day: 'Jun 17th',
            reminder: true
        },
    ]) 


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1 
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map( (task) => task.id == id ? { ...task, reminder:!task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      :<h3>No Tasks To Show</h3>}
    </div>
  );
}

export default App;
