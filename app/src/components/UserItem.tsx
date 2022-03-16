import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps{
   user: IUser
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '15px'}}>
            {user.id}/ {user.name}/ {user.email}, address: {user.address.city}, {user.address.street}
        </div>
    );
};

export default UserItem;