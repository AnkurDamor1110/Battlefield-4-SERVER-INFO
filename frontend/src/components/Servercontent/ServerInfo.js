import React from 'react';
import './ServerInfo.css'; // Add this for custom styling

const ServerInfo = () => {
  return (
    <div className="server-info-container">
      <h1 className="server-title">
      ! RC3-BASEMAPS
      </h1>
      <div className="server-details">
      <img src='https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg' alt='flage'/>
        <span className='server_l'>
          CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 60HZ </span>
        <div className='server_de'>
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
          
        </div>
      </div>
      <div className="server-actions">
        <button className="action-button">JOIN</button>
        <button className="action-button">SPECTATE</button>
        <button className="action-button">JOIN AS COMMANDER</button>
        <span className="action-button action-favorite">★ 13672</span>
      </div>
      {/* <div className="server-stats">
        <span className="player-count">★ 13672</span>
      </div> */}
    </div>
  );
};

export default ServerInfo;
