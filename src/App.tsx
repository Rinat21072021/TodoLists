import React, {useState} from 'react';
import './App.css';
import {tasksType, Todolist} from "./componets/Todolist";



function App() {
    let [tasks, setTasks] = useState<Array<tasksType>>([
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
        {id:4, title:"Redux", isDone:false},
        {id:5, title:"JSX", isDone:false},
])



    function removeTask(id:number){
       setTasks(tasks.filter(t=>t.id !==id))
    }

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasks}
                      removeTask={removeTask}

            />

        </div>
    );
}

export default App;
