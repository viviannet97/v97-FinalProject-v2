import {React, useCallback, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { collection, deleteField, getDocs, updateDoc } from "firebase/firestore";
//import { firestore } from '../firebase';

import { auth } from "../firebase";
import { RecipeCard } from "../component/recipeCard";
//import { RecipeContext } from "../context/recipeContext";

export default function ListRecipe() {
  const navigate = useNavigate();
  //const {ingredients, setIngredients} = useContext(RecipeContext)
  // const [ingredientsR, setIngredientsR] = useState([]); // for read data

  const loginOut = () => {
    auth.signOut();
    navigate("/");
  };

//   const fetchPost = useCallback(async () => {

//     await getDocs(collection(firestore, "ingredients"))
//         .then((querySnapshot) => {
//             const newData = querySnapshot.docs
//                 .map((doc) => ({ ...doc.data(), id: doc.id}));
//                 setIngredientsR(newData);
//                console.log("data",newData);
//                 //console.log(ingredientsR, "ingredients")
//         })

// }, [])


// useEffect(() => {
//     fetchPost();
// }, [fetchPost])

// console.log("test",ingredientsR)

// trying to edit
// await updateDoc(frankDocRef, {
//   "age": 13,
//   "favorites.color": "Red"
// });

// delete

// const deleteIngredientes = async () => {
  
//   try {
//     const docRef = await updateDoc(collection(firestore, "ingredients"), {
//      //most be ingredient 'cose ingredients add all data
//       //id: ingredient.id,
//       //ingredients: ingredient,
//       idf: deleteField(),
//       name: deleteField(),
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

// }
// await updateDoc(cityRef, {
//   capital: deleteField()
// });

  return (
    <>
    <nav class="navbar navbar-light bg-light">
       <div class="container-fluid">

        <span class="navbar-brand mb-0 h1">Recipe List</span>

         <div className="header d-flex align-items-left d-grid gap-2">
          <button style={{border:"none"}}onClick={loginOut}>
          <i class="fa-solid fa-right-from-bracket fa-lg"></i>
          </button>
          
           
          <NavLink to='/newRecipe'>
            go
            </NavLink>
            </div>

            
       </div>
    </nav>

    <div className="container">
      <div className="row">
        
        <RecipeCard/>

        </div>
      </div>
    
    
{/* <div>
       {ingredientsR.map(
          (ingredientsR,i)=>
              <p key={i} style={{color:"white"}}>{ingredientsR.name}</p>
          )
       }

</div> */}
       {/* <p>{ingredientsR.ingredients.id}</p> */}
      

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>

          <button className="btn btn-primary">Sign In</button>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={loginOut}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="a">
                  Dashboard
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <NavLink to="/demo">Go</NavLink>
              <a
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}
