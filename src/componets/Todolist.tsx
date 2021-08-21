import React from 'react';


export type tasksType={
    id:number
    title:string
    isDone:boolean
}
export type TodolistPropsType={
    title: string
    tasks:Array<tasksType>
    removeTask:(id:number)=>void

}
export function Todolist(props:TodolistPropsType) {

    let mapLi=props.tasks.map(t=><li>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={()=> props.removeTask(t.id)}>х</button>
    </li>)

    return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {mapLi}
                    </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

    );
}


