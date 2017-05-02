import React, { Component } from 'react';

class GoogleMap extends Component{

    componentDidMount(){
        console.log("hello");
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center : {
                lat : this.props.lat,
                lng : this.props.lon
            }
        });
    }
    
    render(){
        return (
            <div>
                <div ref = "map" />
                <div>{this.props.name}</div>
            </div>
        );
    }
}   

export default GoogleMap;