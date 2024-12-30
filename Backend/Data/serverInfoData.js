const serverInfo = {
    "players": "64/64",
    "ping": "47ms",
    "tickrate": "60Hz",
    "settings": {
      "region": "Europe - DE",
      "punkbuster": "ON",
      "fairfight": "ON",
      "password": "OFF",
      "preset": "Normal"
    },
    "advanced": {
        "minimap": "ON",
        "onlySquadLeaderSpawn": "OFF",
        "vehicles": "ON",
        "teamBalance": "ON",
        "minimapSpotting": "ON",
        "hud": 'ON',
        "vehicleCam3P": "ON",
        "regenerativeHealth": "ON",
        "killCam": "ON",
        "friendlyFire": "OFF",
        "spotting3D": "ON",
        "enemyNameTags": "ON"
    },
    "rules": {
        "tickets": 400,
        "vehicleSpawnDelay": 25,
        "bulletDamage": 100,
        "kickAfterTeamKills": 5,
        "playerHealth": 100,
        "playerRespawnTime": 100,
        "kickAfterIdle": 300,
        "banAfterKicks": 3
    },
  }
  
  module.exports = (req, res) => {
    res.json(serverInfo);
  };