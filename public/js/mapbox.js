/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2Fpa2lyYW4zMzUiLCJhIjoiY2wwYXY3ZDlnMHF1ZTNwcXRoc2liaXI1NSJ9.b74HBdqAY4SvZ1aOobOK5A';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/saikiran335/cl0go8xg9000914o1p2bunf9w',
    scrollZoom: false

  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
  
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};