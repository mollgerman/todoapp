import React, { useState } from 'react'

const CustomForm = ({ addTask }) => {
    
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

    return (
        <form
            className='todo'
            onSubmit={handleFormSubmit}
            >
            <div className="wrapper">
                <input 
                    type="text"
                    id="task"
                    className='input'
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter Task"
                />
                <label 
                    htmlFor="task"
                    className='label'
                >Enter Task</label>
            </div>
            <button
            className='btn'
            aria-label='Add Task'
            type='submit'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </button>
            
        </form>
    )
}

export default CustomForm