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

        console.log("before redirect");

        navigate("/test", { replace: true });

        console.log("after redirect");
 
      })
      .catch((error) => {
        console.error(error);
      });
  
  };

  return (
    // <div classNameName="App">
    //   <button onClick={ onLogin }>Sign in</button>

    // </div>
    //  <section classNameName="vh-100">
    <>
      {/* <section classNameName="vh-100">
        <div classNameName="container-fluid h-custom">
          <div classNameName="row d-flex justify-content-center align-items-center h-100">
            <div classNameName="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                classNameName="img-fluid"
                alt=""
              />
            </div>
            <div classNameName="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form> */}

      {/* loguearse con google, twitter, linkedin  https://mdbootstrap.com/docs/standard/extended/login/#!*/}

      {/* <div classNameName="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    classNameName="btn btn-primary btn-lg"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                    }}
                    onClick={onLogin}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div classNameName="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div classNameName="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
        </div>
      </section> */}


      <section className="background-radial-gradient overflow-hidden"> 
       
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: " hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body ">
                 
                  <form>
                    <div className="  mx-auto  ">
                      <button
                      // className="btn btn-primary "
                      className="fw-bold"
                        type="button"
                        onClick={onLogin}
                        style={{
                          border:'none', 
                          background:"transparent",
                          fontSize:"30px",
                          color:"hsl(218, 81%, 85%)"

                          
                        
                    
                        }}
                        
                       
                      >
                        Sign in{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
    </>
  );
}

//export default onLogin;
