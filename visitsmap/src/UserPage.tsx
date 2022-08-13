import {useParams}  from "react-router-dom";
import styled from 'styled-components';
import {getUserById, IUser} from './Model';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const UserPage = () => {
    const {id} = useParams();
    const user: IUser|undefined = getUserById(id);

    const gridUser = (user: IUser) => {
        return (
            <Grid >
                <div>{user.username }</div>
                <div>Poops: {user.count}</div>
                <div>Achievments: {user.achievements}</div>
            </Grid>
        )
    } 
    return (
        <>
            {user ? gridUser(user) : 'User not found'}
        </>
    )
}

export default UserPage;