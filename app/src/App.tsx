import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import OtherPage from "./components/OtherPage";
import HomePage from "./components/HomePage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


function App() {
    return (
        <BrowserRouter>
            <div >
                <NavLink to='/' style={{padding: '10px 15px'}}>Home</NavLink>
                <NavLink to="/users" style={{padding: '10px 15px'}}>Users list</NavLink>
                <NavLink to="/todos" style={{padding: '10px 15px'}}>Todos list</NavLink>
                <NavLink to='/other' style={{padding: '10px 15px'}}>Other list</NavLink>
            </div>
            {/*new react router dom no using exact and without component={}, new element={} */}
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/users/:id'} element={<UserItemPage/>}/>
                <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/other'} element={<OtherPage/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
