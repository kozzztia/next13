"use client";

import React from 'react';
import style from "./style.module.scss"
import {classNames} from "@/helpers/classNames";


import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Page = () => {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    return (
        <div className={classNames(style.mainePage)}>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </div>
    );
};

export default Page;