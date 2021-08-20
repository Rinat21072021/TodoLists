import React from 'react';


type tasksType={
    id:number
    title:string
    isDone:boolean
}
type TodolistPropsType={
    title: string
    tasks:Array<tasksType>
    removeTask:(id:number)=>void

}
export function Todolist(props:TodolistPropsType) {
    return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {
                        props.tasks.map(t=><li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={()=> props.removeTask(t.id)}>х</button>
                        </li>
                    )
                    }
                   {/* <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                    <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                    <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
              */}  </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

    );
}


