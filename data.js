var APP_DATA = {
  "scenes": [
    {
      "id": "floorplan",
      "name": "格局圖",
      "type": "equirectangular",
      "panorama": "tiles/floorplan.jpg",
      "autoLoad": true,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "pitch": 0.1,
          "yaw": -0.8,
          "rotation": 0,
          "target": "2-1"
        },
        {
          "pitch": 0.1,
          "yaw": 0.2,
          "rotation": 0,
          "target": "0-2"
        },
        {
          "pitch": 0.1,
          "yaw": 1.0,
          "rotation": 0,
          "target": "1-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.128972126482746,
          "pitch": 0.30640226007686877,
          "rotation": 0,
          "target": "1-3"
        },
        {
          "yaw": 2.8585161599150144,
          "pitch": 0.2546517430803803,
          "rotation": 4.71238898038469,
          "target": "2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
