
import React, {useState} from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([]) //To store the tasks
    const [newTask, setNewTask] = useState("") // For getting tasks from input field

    // ADD TASK
     const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}]);
            setNewTask(""); // Clear the input once the task is added.
        }
     }

    // TASK COMPLETED OR NOT
    const toggleCompletion = (id) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    }

        // REMOVE TASK
        const removeTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id));
        }

    return(
        <div className="app-container">
            <h2>To Do List</h2>

            <input className="input-field" value={newTask} onChange={(e) => setNewTask(e.target.value)}
                   placeholder='   Add a new text !!' type="text" 
            />

            <button className="add-btn" onClick={addTask}>Add</button>

            <div className="task-container">
                <ul>
                    {tasks.map(task => <li key={task.id}
                                       style={{
                                        textDecoration: task.completed ? "line-through" : "none",
                                       }}>
                        <div className="task">                
                            <span onClick={() => toggleCompletion(task.id)}>{task.text}</span>

                            <button className="rem-btn" onClick={() => removeTask(task.id)}>Remove</button> <br /> <br />                 
                       </div>               
                    </li>)}
                </ul>
            </div>

            

            
        </div>// use map() to display the tasks as lists.
              // ise filter() to remove the completed tasks from the lists.
    );

}

export default ToDoList