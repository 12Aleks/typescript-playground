import React, {FC} from 'react';
import {ITodo} from "../types/types";


interface TodoProps {
    todo: ITodo
}

const TodoItem:FC<TodoProps> = ({todo}) => {
    return (
        <div>
            <input type='checkbox' checked={todo.completed} />
             {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;