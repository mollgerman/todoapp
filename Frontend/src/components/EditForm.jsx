import React, { useEffect, useState } from 'react'

const EditForm = ({editedTask, updateTask, closeEditMode}) => {
    
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name)

    useEffect(() => {
        const closeModalIfEscaped = (e) => {
            e.key == "Escape" && closeEditMode()
        }

        window.addEventListener('keydown', 
        closeModalIfEscaped)

        return () => {
            window.removeEventListener('keydown',
             closeModalIfEscaped)
        }
    }, [closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName})
    }



    return (
        <div 
            role="dialog" 
            aria-labelledby='editTask' 
            onClick={e => { e.target == 
                e.currentTarget && closeEditMode()}}
            >
            <form
                className='todo'
                onSubmit={handleFormSubmit}
                >
                <div className="wrapper">
                    <input
                        type="text"
                        id="editTask"
                        className='input'
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Update Task"
                    />
                    <label
                        htmlFor="editTask"
                        className='label'
                    >Update Task</label>
                </div>
                <button
                className='btn'
                aria-label={`Confirm edited task to now read ${updatedTaskName}`}
                type='submit'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </button>
            
            </form>
        </div>
    )
}

export default EditForm