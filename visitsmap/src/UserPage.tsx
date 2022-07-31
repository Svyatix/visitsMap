import React from "react"

interface IUser extends React.FC {
    userName: 'string';
    poops: number;
    achievements: string[];
}

const UserPage = ({userName, poops, achievements}: IUser) => {
    return (
        <>
            <div>{userName}</div>
            <div>{poops}</div>
            <div>{achievements}</div>
        </>
    )
}

export default UserPage;