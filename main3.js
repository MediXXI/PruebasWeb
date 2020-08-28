var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-0.321, 40],
    zoom: 9
  });

  map.on('load', function () {
    map.addSource('metro', {
        type: 'geojson',
        data: 'https://github.com/MediXXI/sideinfo/blob/master/Simulacion_GEOJSON.geojson'
    });

    map.addLayer({
        'id': 'metro',
        'source': 'metro',
        'type': 'line',
        'paint': {
            'line-color': ['get', 'stroke'],
            'line-width': 4
        }
    });
});