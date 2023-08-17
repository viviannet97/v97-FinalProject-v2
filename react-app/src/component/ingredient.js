import React, { useContext, useState } from "react";
import { RecipeContext } from "../context/recipeContext";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
//import { firestore } from "../firebase";

import "../styles/ingredient.css";
import { firestore } from "../firebase";

export default function Ingredient({ ingredient }) {
  const {
    ingredients,
    setIngredients,
    recipeIngredients,
    setRecipeIngredients,
    setDataLoaded,
  } = useContext(RecipeContext);

  //const [ingredientsR, setIngredientsR] = useState(""); // for read data

  const imageURL = "https://spoonacular.com/cdn/ingredients_100x100/";

  // const [ingredInfo, setIngredInfo] = useState("");

  // useEffect(() => {
  //     fetch(`https://api.spoonacular.com/food/ingredients/${ingred.id}/information?apiKey=d5642d1fd212408ebda361f387f7a4e9&amount=1`
  //     )
  //         .then((resp) => resp.json())
  //         .then((data) => {
  //             console.log(data)
  //             setIngredInfo(data);
  //         })
  //         .catch(() => {
  //             console.log("error getting ingredient info");
  //         })
  // }, [ingred.id])

  // async function searchIngredientInfo(id) {
  //   const response = await fetch(
  //     `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-api-key": "d5642d1fd212408ebda361f387f7a4e9",
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   setRecipeIngredients(data);
  //   console.log(data);
  //   setDataLoaded(true); //??
  // }

  const addIngredientToRecipe = async (e) => {
    e.preventDefault();

    // searchIngredientInfo(ingredient.id);

    // var ri = {};

    // setTimeout(() => {
    //     ri = {
    //         id: recipeIngredients.id,
    //         name: recipeIngredients.name,
    //         // costUnit: recipeIngredients.estimatedCost.unit,
    //         // cost: recipeIngredients.estimatedCost.value,

    //     }
    //     console.log (ri);
    // }, 2000);

    const ri = {
      id: ingredient.id,
      name: ingredient.name,
      // costUnit: recipeIngredients.estimatedCost.unit,
      // cost: recipeIngredients.estimatedCost.value,
    };
    // setRecipeIngredients([...recipeIngredients, recipeIngredient])
    // setIngredients({ results: ingredients.results.filter((ingred) => ingredient.id !== ingred.id) })

    setRecipeIngredients([...recipeIngredients, ri]);
    setIngredients(ingredients.filter((ingred) => ingredient.id !== ingred.id));

    // adding data to Firestore

    // addDoc method
      try {
        const docRef = await addDoc(collection(firestore, "ingredients"), {
         //most be ingredient 'cose ingredients add all data
          //id: ingredient.id,
          //ingredients: ingredient,
          idf: ingredient.id,
          name: ingredient.name,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  
    //setDoc method

    // Your Firebase SDK Initialization code here

//const db = getFirestore(app);

// const idIng= ingredient.id;

// const docRef = doc(firestore, "countries", idIng );

// const data = {
//   name: ingredient.name,
// };

// setDoc(docRef, data)
// .then(() => {
//     console.log("Document has been added successfully");
// })
// .catch(error => {
//     console.log(error);
// })

    // try {
    //   const docRef = collection(firestore, "ingredientes", ingredient.id);

    //   const data = {
    //     name: ingredient.name,
    //   };

    //   setDoc(docRef, data);
    //   //.then(() => {

    //   console.log("Document has been added successfully");
    //   //})
    // } catch (error) {
    //   console.error("Error adding document: ", e);
    // }
    // read data from Firestore
    //   const fetchPost = async () => {
    //     await getDocs(collection(firestore, "ingredients")).then(
    //       (querySnapshot) => {
    //         const newData = querySnapshot.docs.map((doc) => ({
    //           ...doc.data(),
    //           id: doc.id,
    //         }));
    //         setIngredientsR(newData);
    //         console.log(ingredientsR, newData);
    //       }
    //     );
    //   };

    // useEffect(() => {
    //   fetchPost();
    // });
  };
  return (
    <>
      <article className="ingredientFound" onClick={addIngredientToRecipe}>
        <section className="img">
          <img src={imageURL + ingredient.image} alt="ingredient" />
        </section>

        <section className="info w-100">
          <div className="name">{ingredient.name}</div>
          <div className="id">id: {ingredient.id}</div>
        </section>
      </article>
    </>
  );
}
