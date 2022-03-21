import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: '15px', border: '1px solid black', margin: '5px 0', cursor: "pointer"}}>
            {user.id}. Name: {user.name}, Email: {user.email}. User address: {user.address.city}, {user.address.street}
        </div>
    );
};

export default UserItem;