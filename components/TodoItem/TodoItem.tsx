import React, {useEffect, useState} from 'react';
import {deleteTodo} from "@/redux/features/todosSlice";


interface TodoItemInterface {
    data : { id: string ,task: string , isDone : boolean }
    deleteTodo : (id :string)=>void;
    changeCheck : (id :string)=>void;
}
const TodoItem = ({data , handler}: TodoItemInterface) => {
    const [done , setDone] = useState(data.isDone)

    return (
        <div>
            <span>{data.task}</span>
            <input type={"checkbox"}
                   checked={done}
                   onChange={()=>setDone(prev => !prev)}
            />

            <button onClick={()=>deleteTodo(data.id)}>X</button>

        </div>
    );
};

export default TodoItem;