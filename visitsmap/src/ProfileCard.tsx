import { Card, Avatar } from "antd"
import { useNavigate } from 'react-router-dom';
import { Button } from "antd";
import { getEmojiByIds } from "./Model";

interface IProps {
    userKey: string;
    title: string;
    achives: number[];
}

interface IEmojiList {
    achives: number[];
}

const EmojiList = (props: IEmojiList) => {
    const emoji = getEmojiByIds(props.achives);
    return (
        <>
            <ul style={{listStyleType: 'none', paddingLeft: '15px'}}>
                {
                    emoji.map(pic => <li style={{color: 'black'}} key={pic}>{pic}</li>)
                }         
            </ul>
        </>
    )
}

const ProfileCard = (props: IProps) => {
    const { Meta } = Card;
    const clickNavigate = (userKey: string) => navigate(`/user/${userKey}`, {replace: true}); 
    const navigate = useNavigate();
    return(
        <>
            <Card style={{width: 300, marginTop: 16,}}>
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                    title={<Button type='link' onClick={() => {clickNavigate(props.userKey)}}>{props.title ? props.title : 'NONAME'}</Button>}
                    description={<EmojiList achives={props.achives}/>}
                />
            </Card>
      </>
    )
}

export default ProfileCard;