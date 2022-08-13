import { useEffect, useState } from 'react';
const DG = require('2gis-maps');

const MapCard = () => {
    let [map, setMap] = useState(null);
    useEffect(() => {
        if(!map) {
                setMap(map = DG.map('map-container', {
                    center: [55.31, 25.23],
                    zoom: 5
                })
            );
            DG.marker([53.014607, 36.129657]).addTo(map).bindPopup('Poops here');
        }
    }, []);

    return (
        <div id="map-container" style={{ width: '100%', height: '100vh' }}></div>
    )
}

const Map = () => {
    return (<MapCard/>)
}

export default Map;