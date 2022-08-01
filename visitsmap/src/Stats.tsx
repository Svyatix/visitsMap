import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {Link} from 'react-router-dom';
import {getUsersList}from './Model';

interface DataType {
    key: string;
    username: string;
    count: number;
    achievements: number[];
  } 

  const Stats = () => {
    const data: DataType[] = getUsersList();
      const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'username',
          key: 'key',
          render: (text: string) => <Link to="user/:id">{text}</Link>
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