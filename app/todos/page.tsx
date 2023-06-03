'use client'
import React, {useEffect, useState} from 'react';
import style from "./style.module.scss";
import {classNames} from "@/helpers/classNames";

import { addTodo} from "@/redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ListWrapper from "@/components/ListWrapper/ListWrapper";
import {createTodoId} from "@/helpers/createTodoId";



const Page = () => {
    const [inputValue , setInputValue] = useState<string>("")

    const todos = useAppSelector((state) => state.todosReducer.todos);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log(todos)
    },[todos])
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
                {todos.map(item => <p key={item.id}>{item.task}</p>)}
            </ListWrapper>
        </div>
    );
};

export default Page;