import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = async() => {

    }

    useEffect(() => {

        fetchTodos()
    }, []);

    return (
        <div>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
};

export default TodosPage;