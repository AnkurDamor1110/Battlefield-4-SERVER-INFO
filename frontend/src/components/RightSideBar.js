import React from "react";
import "./RightSideBar.css";

const RightSideBar = () => {
  const onlineUsers = [
    { id: 1, name: "MaryJane", status: "Online", avatar: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png" },
  ];

  const offlineUsers = [
    { id: 1, name: "420", status: "Offline", avatar: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png" },
  ];

  return (
    <div className="sidebar-details">
      <div className="">
      <h3>Squad</h3>
        <div className="squad-join user">
        
          <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg" />
          <span className="user-details">Squad Join</span>
        </div>
      </div>
    
      <div className="separator"></div>
      <div className="section online">
      <div className="mod-online">
        <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg" />
        <h3 className="user-details">Online</h3>
        </div>
        {onlineUsers.map((user) => (
          <div key={user.id} className="user">
            <img src={user.avatar} alt={user.name} />
            <div className="user-details">
              <div className="name">{user.name}</div>
              <div className="status">{user.status}</div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="separator"></div>
      <div className="section offline">
        <div className="mod-offline">
          <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"/>
        <h3 className="user-details">Offline</h3>
        </div>
        {offlineUsers.map((user) => (
          <div key={user.id} className="user">
            <img src={user.avatar} alt={user.name} />
            <div className="user-details">
              <div className="name">{user.name}</div>
              <div className="status">{user.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
