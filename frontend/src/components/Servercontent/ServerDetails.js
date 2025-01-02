import React, { useEffect, useState } from 'react';
import './ServerDetails.css';
import { getDetails } from '../../services/api';

const ServerDetails = () => {
  const [serverData, setServerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await getDetails();
      setServerData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch server details. Please try again later.');
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!serverData) {
    return <div className="loading-message">Loading...</div>;
  }

  const { players, ping, tickrate, settings, advanced, rules } = serverData;

  return (
    <div>
      <div className="header">
        <div>
          <strong>PLAYERS</strong>
          <p >{players}</p>
        </div>
        <div>
          <strong>PING</strong>
          <p>{ping}</p>
        </div>
        <div>
          <strong>TICKRATE</strong>
          <p>{tickrate}</p>
        </div>
      </div>
      <div className="content">
        <div className="section-container">
          <h3>SETTINGS</h3>
          {Object.entries(settings).map(([key, value]) => (
            <div key={key} className="server_setting">
              <div>{key.toUpperCase()}</div>
              <div> {value} </div>
            </div>
          ))}
        </div>
        <div className="section-container">
          <h3>ADVANCED</h3>
          {Object.entries(advanced).map(([key, value]) => (
            <div key={key} className="server_setting">
              <div>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</div>
              <div> {value} </div>
            </div>
          ))}
        </div>
        <div className="section-container">
          <h3>RULES</h3>
          {Object.entries(rules).map(([key, value]) => (
            <div key={key} className="server_setting">
              <div>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ServerDetails;
