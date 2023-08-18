import { useEffect } from "react";

import "../styles/Login.css";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";
//import { NavLink, useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/geeks-firebase-72e6d/us-central1/helloWorld`
        );
        const text = await res.text();

        console.log(text);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const onLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log("token: ", token);
        console.log(" user: ", user);

        console.log("before redirect");

        navigate("/newRecipe", { replace: true });

        console.log("after redirect");

        const res = await fetch(
          `${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/geeks-firebase-72e6d/us-central1/signUpOrSigninUser`,
          {
            method: "post",
            body: JSON.stringify({ email: user.email }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const dbUser = await res.json();
        //navigate("/home");
        console.log(" data: ", dbUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="body d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="login-box">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo" style={{color:"black"}}>Do your own recipes</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 sign">
              <br />
              <h3 className="header-title">LOGIN</h3>
              <form className="login-form">
                {/* <div className="form-group">
                              <input type="text" className="form-control" placeholder="Email or UserName"/>
                          </div>
                          <div className="form-group">
                              <input type="Password" className="form-control" placeholder="Password"/>
                              <a href="#!" className="forgot-password">Forgot Password?</a>
                          </div> */}
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={onLogin}
                  >
                    LOGIN WITH <i className="fa-brands fa-google"></i>
                  </button>
                </div>
                {/* <div className="form-group">
                              <div className="text-center">New Member? <a href="#!">Sign up Now</a></div>
                          </div> */}
              </form>
            </div>
            <div className="col-sm-6 hide-on-mobile">
              <div id="demo" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                  <li
                    data-target="#demo"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                </ul>
                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="slider-feature-card">
                      <img src="https://www.freeiconspng.com/thumbs/recipes-icon-png/notebook-recipe-icon-18.png" alt="" />
                      <h3 className="slider-title">Cost Recipes</h3>
                      <p className="slider-description">
                        We offer opportunity to know how much can cost a food plate in accordance with price of ingredients 
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="slider-feature-card">
                      <img src="https://i.imgur.com/Yi5KXKM.png" alt="" />
                      <h3 className="slider-title">Title Here</h3>
                      <p className="slider-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione, debitis?
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="true"
                >
                  {/* <!-- Left and right controls --> */}
                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

//export default onLogin;
