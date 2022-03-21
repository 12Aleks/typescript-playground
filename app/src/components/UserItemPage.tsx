import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useParams , useNavigate} from 'react-router-dom';
import axios from "axios";


interface UserItemPageParams{
    id: string;
}

const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    // @ts-ignore
    const params = useParams<UserItemPageParams>();
    let navigate = useNavigate();

    const fetchUser = async () => {
        try{
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/` + params.id);
            setUser(response.data)
        }catch(e){
            alert(e)
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);


    return (
        <div>
          <button onClick={() => navigate('/users')} style={{margin: '20px 15px', padding: '10px 20px'}}>Back</button>
           <h1>This is {user?.name} page</h1>
            <div>
               <p> 1) User email: {user?.email}</p>
               <p> 2) address, city: {user?.address.city}</p>
               <p> 3) address, street: {user?.address.street}</p>
            </div>
        </div>
    );
};

export default UserItemPage;