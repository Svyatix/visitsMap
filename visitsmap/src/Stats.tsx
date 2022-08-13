import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import {Table} from 'antd';
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom';
import {getUsersList}from './Model';

interface DataType {
    key: string;
    username: string;
    count: number;
    achievements: number[];
  } 

  interface IRecord {
    key: string;
  }

  const Stats = () => {
    const navigate = useNavigate();
    const data: DataType[] = getUsersList();
    const clickNavigate = (record: IRecord) => {
      navigate(`/user/${record.key}`, {replace: true}); 
    }
      const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'username',
          key: 'key',
          render: (text: string, record: IRecord) => <Button type='link' onClick={() => {clickNavigate(record)}}>{text}</Button>
        },
        {
          title: 'Poops',
          dataIndex: 'count',
          key: 'key',
        },
        {
          title: 'Achievements',
          dataIndex: 'achievements',
          key: 'key',
        }
      ];
    return (
        <>
            <Table 
              pagination={false} 
              columns={columns} 
              dataSource={data}
            />
        </>
    )
}
export default Stats 