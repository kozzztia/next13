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

    const getTodos = async () =>{
        const res = await axios.get('http://localhost:3000/api/todos')
        return res.data
    }




    useEffect(()=>{
        getTodos().then(data => console.log(data))
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