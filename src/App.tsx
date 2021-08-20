import React from 'react';
import './App.css';
import {Todolist} from "./componets/Todolist";




function App() {
    const tasks1=[
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
    ]

    function removeTask(id:number){
        let resultTask=tasks1.filter(t => t.id !== id)
    }

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasks1}
                      removeTask={removeTask}

            />

        </div>
    );
}

export default App;
