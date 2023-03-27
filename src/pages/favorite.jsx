import '../css/favorite.css'
import logo from '../logos/logo_1.svg'
import mapFav from '../images/map_fav.svg'
import favPlace from '../images/fav-place.svg'

export default function favorite() {
  return (
    <div className="favorite-page">
      <div className="header">
        <div className="container">
          <div className="nav-left">
            <div className="img-logo">
              <a href="./"
                ><img
                  decoding="async"
                  className="logo"
                  src= {logo}
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
      <div className="about-fav">
        <div className="container">
          <div className="pargh-fav">
            <h2>Favorite Location</h2>
            <p>
              Here you will find all the locations that have been saved with the
              possibility of adding coordinates
            </p>
          </div>
          <div className="img-fav">
            <img src= {mapFav} alt="" />
          </div>
        </div>
      </div>
      <div className="fav-map" id="fav-map">
        <div className="container">
          <h2 style={{marginTop: '20px' , color: '#00A850'}} >Favorite Name Place</h2>
          <div className="fav-map-content">
            <div className="card">
              <img src= {favPlace} alt="" />
              <div className="info">
                <h3>place</h3>
                <p>name place</p>
              </div>
            </div>
            <div className="card">
              <img src={ favPlace} alt="" />
              <div className="info">
                <h3>place</h3>
                <p>name place</p>
              </div>
            </div>
            <div className="card">
              <img src= {favPlace} alt="" />
              <div className="info">
                <h3>place</h3>
                <p>name place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fav-map" id="fav-map">
        <div className="container">
          <h2 style={{marginTop: '50px' , color: '#00A850'}}>Favorite Coordinates Place</h2>
          <div className="fav-map-content">
            <div className="card">
              <img src= {favPlace} alt="" />
              <div className="info">
                <h3>coordinates</h3>
                <p>coordinates place</p>
              </div>
            </div>
            <div className="card">
              <img src={ favPlace} alt="" />
              <div className="info">
                <h3>coordinates</h3>
                <p>coordinates place</p>
              </div>
            </div>
            <div className="card">
              <img src= {favPlace} alt="" />
              <div className="info">
                <h3>place</h3>
                <p>name place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}