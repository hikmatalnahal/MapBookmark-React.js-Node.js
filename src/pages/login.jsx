import '../css/login.css'
import logo from '../logos/logo_1.svg'
import person1 from '../images/person1.png'

export default function Login() {
  return (
    <div className="login-div">
      <div className="header">
        <div className="container">
          <div className="nav-left">
            <div className="img-logo">
              <a href="./">
                <img
                  decoding="async"
                  className="logo"
                  src= {logo}
                  alt=""
                />
              </a>
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
            <p>Hey You</p>
            <p>LogIn With Us</p>
            <form action="" className="login-form">
              <label for="">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input-email"
              />
              <label for="">passowrd</label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input-password"
              />
            </form>
            <input
              type="submit"
              name="submit"
              value="sign in"
              className="submit"
            />
            <div className="creat-acc">
              <p>
                Don't have an account? <a href="./signup">Create account</a>{" "}
              </p>
            </div>
          </div>
          <div className="right-div">
            <img src= {person1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
