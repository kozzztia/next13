'use client'
import React, {memo, useEffect, useState} from 'react';
import style from "./style.module.scss";
import {classNames} from "@/helpers/classNames";

import {addTodo, changeIsDone, deleteTodo} from "@/redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ListWrapper from "@/components/ListWrapper/ListWrapper";
import {createTodoId} from "@/helpers/createTodoId";
import TodoItem from "@/components/TodoItem/TodoItem";
import axios from "axios";
import {NextResponse} from "next/server";



const Page = () => {


    const todos = useAppSelector((state) => state.todosReducer.todos);
    const dispatch = useAppDispatch();
    // useEffect(()=>{
    //     console.log(todos)
    // },[todos])


    const [inputValue , setInputValue] = useState<string>("");

    const getTodoById = async () =>{
        const res = await axios.get('http://localhost:3000/api/todos?id=1')
        return res.data
    }
    const getTodoByTask = async () =>{
        const res = await axios.get('http://localhost:3000/api/todos?task=task2')
        return res.data
    }
    const getTodoByIsDone = async () =>{
        const res = await axios.get('http://localhost:3000/api/todos?done=false')
        return res.data
    }
    const getAllTodos = async () =>{
        const res = await axios.get('http://localhost:3000/api/todos')
        return res.data
    }




    useEffect(()=>{
        getAllTodos().then(data=> console.log("all: " , data))
        getTodoById().then(data => console.log("id: " , data))
        getTodoByTask().then(data => console.log("task: " , data))
        getTodoByIsDone().then(data => console.log("done :" , data))
    },[])
    return (
        <div className={classNames(style.todosPage)}>

            <form
                onSubmit={ (e)=>{
                     e.preventDefault();
                     dispatch(addTodo({id:createTodoId() ,task: inputValue, isDone: false}))
                     setInputValue("");
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
                {todos.length >= 1?todos.map(item =>
                    // <button key={item.id} onClick={(e)=>dispatch(deleteTodo(item.id))}>{item.task}</button>
                    <input key={item.id} type={"checkbox"} onChange={()=>dispatch(changeIsDone(item.id))} checked={item.isDone}/>

                    )
                    :
                    <p>Empty</p>}
            </ListWrapper>
        </div>
    );
};

export default memo(Page);