import { React, useState, useCallback, useEffect} from "react";
//import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

import "../styles/test.css";

export default function Todo() {
  
 // const { todo } = props;

  const navigate = useNavigate();

  const loginOut = () => {
    auth.signOut();
    navigate("/");
  };

  // read data
   const [todos, setTodos] = useState([]); // for read data
   const [showDelete, setShowDelete] = useState(false);

  const fetchPost = useCallback(async () => {
    await getDocs(collection(firestore, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);

      console.log(todos, newData);
    });
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  // const todoList = (todo, i) => {

  //   return <p key={i}> {todo.todo}</p>;
  // };

  return (
    <div style={{ color: "white" }}>
      <button onClick={loginOut}>Sign out</button>
      <p >me ves</p>
      <NavLink to="/demo">Go</NavLink>

    <div > traying toDoList</div>

    <div
    id="input"
    className="d-flex flex-row d-grid gap-2"
    onMouseEnter={() => setShowDelete(true)}
    onMouseLeave={() => setShowDelete(false)}
    >
      <div>
       {todos.map((todos,i)=><p key={i}>{todos.todo}
       {showDelete&& (
         <p><i className="fa-solid fa-xmark fa-xs"></i></p>
         )
       }
       </p>)} 
       </div>
        
    </div>

      
        

        
      </div>
   
  );
}
