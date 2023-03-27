import React, { Component } from 'react';
import '../css/map.css'
import logo from '../logos/logo_1.svg'
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="nav-left">
              <div className="img-logo">
                <a href="./"
                ><img
                    decoding="async"
                    className="logo"
                    src={logo}
                    alt=""
                  /></a>
              </div>
              <div className="left-link">
                <a href="./map">Map</a>
                <a href="./favorite">Favorite</a>
              </div>
            </div>
            <div className="nav-right">
              <div className="right-link">
                <a href="./signup">Create account</a>
                <a href="./login">Login</a>
              </div>
            </div>
          </div>
        </div>
        <div className="search-box">
          <input className="search-input" type="text" placeholder="Search for places" />
          <input type="button" className='search-btn' value="Search" onClick={this.search} />
          {/* <button type="submit" className='search-btn' onClick={this.search}>Search</button> */}
        </div>
        <Map style={{ marginLeft: '-20px', marginTop: '20px'  }}
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 31.5017, lng: 34.4668 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4nJ_35oFFm0vh6dBeXdncZfWc7Jouhwc&libraries=places'
})(MapContainer);