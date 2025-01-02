import React from "react";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const menuItems = [
    { id: 1, image: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png" },
    { id: 2, image: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab108eb6365513203b_side-menu__game.png" },
    { id: 3, image: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png" },
    { id: 4, image: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png" },
    { id: 5, image: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafaa108eb614c813203a_side-menu__career.png" },
    { id: 6, icon: "▶" }, // Play button
    { id: 7, icon: "☰" }, // Menu icon
  ];

  const bottomItems = [
    { id: 8, icon: "?" },
    { id: 9, icon: "⏻" }, // Power icon
  ];

  return (
    <div className="sidebar">
      {/* Center items */}
      
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.image ? (
              <img src={item.image} alt={`Item ${item.id}`} />
            ) : (
              <span>{item.icon}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Bottom items */}
      <div className="bottom-icons">
        {bottomItems.map((item) => (
          <li key={item.id}>
            <span>{item.icon}</span>
          </li>
        ))}
      </div>
      
    </div>
  );
};

export default LeftSideBar;
