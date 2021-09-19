
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "OsmFile_1": {
            "type": "geojson",
            "data": json_OsmFile_1
        }
                    ,
        "aseanpm10_2": {
            "type": "raster",
            "tiles": ["https://tiles.aqicn.org/tiles/asean-pm10/{z}/{x}/{y}.png?token=slayerpoint11@gmail.com"],
            "tileSize": 256
        },
        "usepapm25_3": {
            "type": "raster",
            "tiles": ["https://tiles.aqicn.org/tiles/usepa-pm25/{z}/{x}/{y}.png?token=slayerpoint11@gmail.com`"],
            "tileSize": 256
        }},
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_OsmFile_1_0",
            "type": "circle",
            "source": "OsmFile_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e8718d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_aseanpm10_2_2",
            "type": "raster",
            "source": "aseanpm10_2"
        },
        {
            "id": "lyr_usepapm25_3_3",
            "type": "raster",
            "source": "usepapm25_3"
        }],
}