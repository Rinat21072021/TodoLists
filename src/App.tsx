import React from 'react';
import './App.css';
import {Todolist} from "./componets/Todolist";



function App() {
    return (
        <div className="App">
            <Todolist title={'What to learn!'}/>
        </div>
    );
}

export default App;
