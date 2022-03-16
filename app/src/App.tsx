import React from 'react';
import Card, {ButtonVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";


function App() {
  const users: IUser[] = [
    {id: 1, name: 'Bob', email: 'test@mail.ru', address: {city: 'Kiev', street: 'Borszagowskaja', zipcode: '80180'}},
    {id: 2, name: 'Tom', email: 'test22323@mail.ru', address: {city: 'Kiev', street: 'Stawropolskaja', zipcode: '20180'}}
  ]


  return (
    <div className="App">
        <Card width='100px' height='100px' border='1px solid red' onClick={text => console.log(text)} variant={ButtonVariant.outlined}>
          <button>Click</button>
        </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
