import dataBase from './db.json';
export interface IUser {
    key: string;
    username: string;
    count: number;
    achievements: number[];
}

export function getUsersList(): IUser[] {
    const userList: any = [];
    const users = dataBase.userStats;
    const usersKeys = Object.keys(users);
    
    usersKeys.forEach((key) => {
        const user = users[key as keyof typeof users];
        const userWithKey = Object.assign({key}, user);
        userList.push(userWithKey);
    })
    return userList;
}

export function getUserById(userId: string|undefined): IUser|undefined {
    const userList = getUsersList();
    return userList.find((element) => {return element.key === userId});
}