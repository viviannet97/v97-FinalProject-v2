import { React, useCallback, useState, useEffect } from "react";
//import React, { useContext } from "react";
//import { RecipeContext } from "../context/recipeContext";

import {
  collection,
  deleteField,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";

import "../styles/recipeCard.css";

export function RecipeCard() {
  const imageURL = "https://spoonacular.com/cdn/ingredients_100x100/";

  //const { recipeIngredients, setRecipeIngredients } = useContext(RecipeContext);
  const [ingredientsR, setIngredientsR] = useState([]); // for read data

  const fetchPost = useCallback(async () => {
    await getDocs(collection(firestore, "ingredients")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setIngredientsR(newData);
        console.log("data", newData);
        //console.log(ingredientsR, "ingredients")
      }
    );
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  console.log("test", ingredientsR);

  return (
    <div class="col-md-4 mt-4">
      <div class="card profile-card-5">
        <div class="card-img-block">
          <img className="card-img-top" src={imageURL} alt="" />
        </div>
        <div class="card-body pt-0">
          <h5 class="card-title">text</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div>
            {ingredientsR.map((ingredientsR, i) => (
              <p key={i} style={{ color: "black" }}>
                {ingredientsR.name} <img src={ingredientsR.image} alt="" />
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* <p class="mt-3 w-100 float-left text-center"><strong>Card with Floting Picture</strong></p> */}
    </div>
  );
}
