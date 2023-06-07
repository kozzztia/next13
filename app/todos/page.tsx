'use client'
import React, {memo, useEffect, useState} from 'react';
import style from "./style.module.scss";
import {classNames} from "@/helpers/classNames";


import ListWrapper from "@/components/ListWrapper/ListWrapper";

import axios from "axios";


const todoUrl = "http://localhost:3000/api/todos"
const getTodoById = async () =>{
    const res = await axios.get(`${todoUrl}?id=1`)
    return res.data
}
const getTodoByTask = async () =>{
    const res = await axios.get(`${todoUrl}?task=task2`)
    return res.data
}
const getTodoByIsDone = async () =>{
    const res = await axios.get(`${todoUrl}?done=false`)
    return res.data
}
const getAllTodos = async () =>{
    const res = await axios.get(`${todoUrl}`)
    return res.data
}

const postTodo = async (value : string)=>{
    const res = await axios.post(`${todoUrl}` , {
        value
    })
    return res.data
}

const removeTodo = async (id : number)=>{
    const res = await axios.delete(`${todoUrl}?deleteId=${id}`)
    return res.data
}


const Page = () => {
    const [inputValue , setInputValue] = useState<string>("");
    const [todos , setTodos] = useState<{id :number , done : false , task : string}[]|[]>([])

    useEffect(()=>{
        getAllTodos().then(res=> setTodos(res))
    },[])
    return (
        <div className={classNames(style.todosPage)}>
            <form
                onSubmit={ async (e)=>{
                    await e.preventDefault();
                    await postTodo(inputValue).then(r => console.log("post:" , r));
                    await getAllTodos().then(res=> setTodos(res));
                    await setInputValue("");
                }}
            >
                <input
                    type={"text"}
                    value={inputValue}
                    onChange={(e)=>{
                        setInputValue(e.target.value)
                    }}
                />
            <button type={'submit'}>add</button>
            </form>

            <ListWrapper>
                {
                    todos?todos.map(item => <p key={item.id}><span>{item.task}</span>
                        <input type={'checkbox'} checked={item.done} onChange={(e)=>{console.log(e.target)}}/>
                        <button onClick={async (e)=>{
                            await e.preventDefault();
                            await removeTodo(item.id).then(res => console.log(res));
                            await getAllTodos().then(res => setTodos(res))

                        }}
                        >X</button>
                    </p>)
                        :
                        <p>Loading...................</p>
                }
            </ListWrapper>
        </div>
    );
};

export default memo(Page);