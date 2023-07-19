import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './index';

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   redirect_uri: 'https://elvishernandez-didactic-carnival-x5jgw56wqqwf9pvj-9099.preview.app.github.dev/'
// })

function App() {

  useEffect(() => {

    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/geeks-firebase-72e6d/us-central1/helloWorld`);
        const text = await res.text();

        console.log(text);

      }
      catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <div className="App">
      <button onClick={(e) => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('token: ', token);
            console.log('user: ', user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            console.error(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        // createUserWithEmailAndPassword(auth, "elvishernandeztheone@gmail.com", "password")
        //   .then((res) => console.log(res))
        //   .catch((err) => console.error(err))
      }}>Sign in</button>
    </div>
  );
}

export default App;
