import '../css/map.css'
import logo from '../logos/logo_1.svg'
import map1 from '../images/map1.jpg'
import ibraheam from '../images/ibrahim.jpg'
import hikmat from '../images/hikmat.jpg'
import salahaldin from '../images/salahaldin.jpg'

export default function index() {
  return (
    <div className="index-page">
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
      <div className="landing">
        <div className="intro-text">
          <p className="p-intro">
            Find your way to your destination with our interactive map and
            detailed directions.
          </p>
          <div className="to-map">
            <p>Easily search for any site you want</p>
            <a href="#">Go To Map</a>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <div className="container">
          <div className="services-content">
            <div className="col">
              <div className="srv">
                <div className="text">
                  <p>Who are we?</p>
                  <h3>About Project</h3>
                  <p>
                    Welcome to our comprehensive map location section! We
                    understand that finding your way to your destination can be
                    a daunting task, especially in a new or unfamiliar area.
                    That's why we've created this section to provide you with
                    all the tools you need to get to where you want to go with
                    ease.
                    <br />
                    <br />
                    Our interactive map allows you to zoom in and out, toggle
                    between different views, and search for specific locations
                    or addresses. You can also use it to explore nearby points
                    of interest, such as restaurants, shops, and attractions.
                    Whether you're looking for a quick bite to eat or planning a
                    day of sightseeing, our map has got you covered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="image image-column">
                <img src= {map1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="special-heading">Team Member</h2>
          <p>The interface for displaying team members</p>
          <div className="portfolio-content">
            <div className="card">
              <img src= {ibraheam} alt="" />
              <div className="info">
                <h3>ibraheam Alaklouk</h3>
                <p>Student At The Islamic University</p>
              </div>
            </div>
            <div className="card">
              <img src= {hikmat} alt="" />
              <div className="info">
                <h3>Hikmat Alnahal</h3>
                <p>Student At The Islamic University</p>
              </div>
            </div>
            <div className="card">
              <img src= {salahaldin} alt="" />
              <div className="info">
                <h3>Salahaldin Hameed</h3>
                <p>Student At The Islamic University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">map project &copy; 2023 All Rights Reserved</div>
    </div>
  );
}