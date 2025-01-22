import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskForm = () => {

    const { addTask } = useContext(TaskContext)
    const [taskName, setTaskName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
    
        if(event.taskName.trim()) {
            addTask({
                id: Date.now(),
                title: taskName,
                completed: false, 
            })
        }
    } 

  return (
    <form className="p-4 bg-gray-200 rounded-lg shadow-md"
    onSubmit={handleSubmit}
    >
        <h2 className="text-xl font-bold -mb-4">
            Agregar tarea
        </h2>

        <input type="text" value={taskname} onChange={(event) => setTaskName(event.target.value)} placeholder="Escribe el nombre de la tarea" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
        <button type="Submit" value="" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Agregar
        </button>
    </form>
  )
}

export default TaskForm
