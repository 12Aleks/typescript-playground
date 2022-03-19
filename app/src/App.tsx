import React, {useEffect, useState} from 'react';
import Card, {ButtonVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";


function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
     fetchUsers();
     fetchTodos()
  }, []);

  const fetchUsers = async () => {
      try{
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data)
      }catch(e){
          alert(e)
      }
  };

    const fetchTodos = async () => {
        try{
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data)
        }catch(e){
            alert(e)
        }
    }

    return (
    <div className="App">
        <Card width='100px' height='100px' border='1px solid red' onClick={text => console.log(text)} variant={ButtonVariant.outlined}>
          <button>Click</button>
        </Card>
        <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  );
}

export default App;
