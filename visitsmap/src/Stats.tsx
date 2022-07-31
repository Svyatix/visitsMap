import React from "react";
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {Link} from 'react-router-dom';

interface DataType {
    key: string;
    userName: string;
    poops: number;
    achievements: string[];
  } 

export default function Stats () {
    const data: DataType[] = [
        {
          key: '1',
          userName: 'John Brown',
          poops: 32,
          achievements: ['nice', 'developer']
        },
        {
          key: '2',
          userName: 'Jim Green',
          poops: 42,
          achievements: ['loser']
        },
        {
          key: '3',
          userName: 'Joe Black',
          poops: 32,
          achievements: ['cool', 'teacher']
        }
      ];
      const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'userName',
          key: 'userName',
          render: (text: string) => <a>{text}</a>,
        },
        {
          title: 'Poops',
          dataIndex: 'poops',
          key: 'poops',
        },
        {
          title: 'Achievements',
          dataIndex: 'achievements',
          key: 'achievements',
        }
      ];
    return (
        <>
            <Table columns={columns} dataSource={data}/>
        </>
    )
}