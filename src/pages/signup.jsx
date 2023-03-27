import '../css/signUp.css'
import logo from '../logos/logo_1.svg'
import person2 from '../images/person2.png'

export default function Signup() {
  return (
    <div className="signup-page">
      <div className="header">
        <div className="container">
          <div className="nav-left">
            <div className="img-logo">
              <a href="./"><img decoding="async" className="logo" src= {logo} alt="" /></a>
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
      <div className="login">
        <div className="container">
          <div className="left-div">
            <h3>Create Account</h3>
            <p>Fill out the form to join us</p>
            <form action="" className="login-form">
              <label for="">Name</label>
              <input type="text" placeholder="Your Name" name="name" className="input-name" />
              <label for="">Email</label>
              <input type="email" placeholder="Your Email" name="email" className="input-email" />
              <label for="">passowrd</label>
              <input type="password" placeholder="Your Password" name="password" className="input-password" />
            </form>
            <input type="submit" name="submit" value="sign in" className="submit" />
            <div className="creat-acc">
              <p>Already hacve  account?  <a href="./login">sign in</a> </p>
            </div>
          </div>
          <div className="right-div">
            <img src= {person2} alt="" />
          </div>
        </div>
      </div>
        <div className="footer">
          map project &copy; 2023 All Rights Reserved
        </div>
    </div>
  );
}
