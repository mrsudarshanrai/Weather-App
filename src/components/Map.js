import React from 'react';

class Map extends React.Component {
    render() {
        return (
            <div className="map">
                <iframe width="100%" height="500" id="gmap" src={`https://maps.google.com/maps?q=${this.props.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0"
                    marginWidth="0"></iframe>
            </div>
        );
    }
}

export default Map;