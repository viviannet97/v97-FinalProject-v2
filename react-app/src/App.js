import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./views/Login";
// import Todo from "./component/Todo";
// // import Demo from "./component/demo";
// import TodoContainer from "./component/TodoContainer";
import NewRecipe from "./views/newRecipe";
import ListRecipe from "./views/listRecipe";

export default function App() {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  //const basename = process.env.BASENAME || "";

  return (
    <div>
      {/* <BrowserRouter basename={basename}> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route exact path="/newRecipe" element={<NewRecipe/>} />
          <Route exact path="/listRecipe" element={<ListRecipe/>} />
          
          {/* <Route exact path="/test" element={<Todo />} />
          <Route exact path="/demo" element={<TodoContainer/>} /> */}


          <Route exact path="/newRecipe" element={<NewRecipe/>} />
          <Route exact path="/listRecipe" element={<ListRecipe/>} />

          

          
          {/*<Route path="/recipes" element={<Recipies/>} /> */
          /* <Route path="/single/:theid" element={<Single />} /> }*/}
          <Route exact path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </Router>

      {/* </BrowserRouter> */}
    </div>
  );
}
