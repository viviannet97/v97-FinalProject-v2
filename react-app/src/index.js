import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

import reportWebVitals from "./reportWebVitals";


import ContextProvider from "./context/userContext";
import App from "./App";
import RecipeContextProvider from "./context/recipeContext";
// import Login from "./pages/Login";
//import Login from "./pages/Login";

// contextProvider for estaus de user
// recipeContextprovider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
  <ContextProvider> 
    <RecipeContextProvider>
    <App/>
    </RecipeContextProvider>
  </ContextProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
