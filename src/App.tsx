import React, {useState} from 'react';
import './App.css';
import {tasksType, Todolist} from "./componets/Todolist";

export type filterValueType='All'| 'Active' | 'Completed'

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
    let [nextFilter, setNextfilter]= useState <filterValueType>('All')
    let filter=tasks
    if (nextFilter ==='Active'){
        filter=tasks.filter((t)=>!t.isDone)
    }
    if (nextFilter ==='Completed'){
        filter=tasks.filter((t)=>t.isDone)
    }
let changFilter=(filter:filterValueType)=>{
    setNextfilter(filter)
}
    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={filter}
                      removeTask={removeTask}
                      changFilter={changFilter}

            />

        </div>
    );
}

export default App;
