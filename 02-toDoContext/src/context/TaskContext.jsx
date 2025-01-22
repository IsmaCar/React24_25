import { createContext } from "react";

//1. Cerar el contexto
export const TaskContext = createContext()

//2. Crear el proveedor (provider) del contexto 
export const TaskProvider = ({ children }) => {
    //acciones sobre una tarea:
    //agregar
    //eliminar
    //editar
    //marcar como completada
    //No olvidar que las tareas han de estar guardadas en el localStorage

    const [task, setTask] = useState(() => {
        const savedTask = localStorage.getItem('task')
        return savedTask ? JSON.parse(savedTask) : []
    })

    const addTask = (task) => {
        setTask((prevtasks)=> [...prevtasks, task])
    }

    const removeTask = (taskId) => {
        setTask((prevTasks) => prevTasks.find((task)=> task.id !== taskId))
    }

    const editTask = (taskId, task) => {}

    const toggleTaskCompletion = (taskId) => {
        setTask((prevTasks)=> prevTasks.map((task)=> task.id === taskId ? 
        {...task, completed: !task.completed}: task))
    }


    return(
        <TaskContext.Provider value={{task, addTask,removeTask,editTask,toggleTaskCompletion}}>
            {children}
        </TaskContext.Provider>
    )
} 