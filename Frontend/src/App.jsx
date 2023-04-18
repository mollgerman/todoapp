import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustomForm'
import Tasks from './components/Tasks'
import EditForm from './components/EditForm'

import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.task', [])
  const [editedTask, setEditedTasks] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [focusEl, setFocusEl] = useState()


  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const updateTask= (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id == task.id
      ? {...t, name: task.name}
      : t 
    )))
    closeEditMode()
  }

  const closeEditMode = () => {
    setIsEditing(false);
    focusEl.focus()
  }

  const enterEditMode = (task) => {
    setEditedTasks(task);
    setIsEditing(true)
    setFocusEl(document.activeElement)
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => 
      t.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id == id
        ? { ...t, checked : !t.checked }
        : t 
      )))
  }


  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>{
        isEditing && (
          <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
          />
         )
        
      
        }
      <CustomForm addTask={addTask}/>
      {tasks && 
        <Tasks 
          tasks={tasks} 
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
          />}
    </div>
  )
}

export default App
