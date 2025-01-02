import React from 'react';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import ServerInfo from '../components/Servercontent/ServerInfo';
import ServerDetails from '../components/Servercontent/ServerDetails';
import './Server.css';

function Server() {
  return (
    <div className="main-page">
      <div className="left-sidebar">
        <LeftSideBar />
      </div>
      <h1 className="server_brower">Server Info</h1>
      <div className="server-content">
        <div className="serverInfo">
          <ServerInfo />
        </div>
        <div className="serverDetails">
          <ServerDetails />
        </div>
      </div>
      <div className="right-sidebar">
        <RightSideBar />
      </div>
      
    </div>
  );
}

export default Server;
