import React from 'react';
import './App.css';
import {Layout} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";

import Stats from './Stats';
import Map from './Map';

const {Header, Content} = Layout; 
export default function App() {
  return ( 
    <>
      <Router>
        <Layout>
          <Header>
            <Link to='/map'>Map</Link>
            <Link to='/stats'>Stats</Link>
          </Header>
          <Content>
            <Routes>
                <Route path="/" element={<Navigate to="/map"/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/stats" element={<Stats/>}/>
            </Routes>
          </Content>
        </Layout>
      </Router>
    </>     
  );
}