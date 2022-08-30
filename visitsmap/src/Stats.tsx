import 'antd/dist/antd.css';
import {getUsersList}from './Model';
import ProfileCard from './ProfileCard';
import styled from 'styled-components'

const UsersContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`
  const Stats = () => {
    const userList = getUsersList();
    return (
        <> 
            <UsersContainer>
              {userList.map((user) => 
               <ProfileCard
                  key={user.key}
                  userKey={user.key}
                  title={user.username}
                  achives={user.achievements}
                />
              )}
            </UsersContainer>         
        </>
    )
}
export default Stats 