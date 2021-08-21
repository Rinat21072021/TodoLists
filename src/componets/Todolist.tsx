import React from 'react';
import {filterValueType} from "../App";


export type tasksType={
    id:number
    title:string
    isDone:boolean
}
export type TodolistPropsType={
    title: string
    tasks:Array<tasksType>
    removeTask:(id:number)=>void
    changFilter:(value:filterValueType)=>void

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
                    <button onClick={()=>props.changFilter('All')}>All</button>
                    <button onClick={()=>props.changFilter('Active')}>Active</button>
                    <button onClick={()=>props.changFilter('Completed')}>Completed</button>
                </div>
            </div>

    );
}


