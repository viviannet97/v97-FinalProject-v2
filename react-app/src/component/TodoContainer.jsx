//https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/

import React, { useState, useEffect, useCallback } from 'react';
import "../styles/TodoContainer.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from '../firebase';
import { NavLink } from 'react-router-dom';
//import Todo from './Todo';
//import Todo from './Todo.jsx';


export default function TodoContainer  () {

    const [todo, setTodo] = useState({}) // add data
    const [todos, setTodos] = useState([]); // for read data
    const [userInput,setUserInput] = useState("");
    const updateTodos = useState("");

    //  const [userInput, setUserInput] = useState("");
    // const { todoList, setTodoList, updateTodos } = useContext(Context);

    //adding data to Coud Firestore: import collection and addDoc functions

    const addTodo = async (e) => {

        e.preventDefault();

        // if (e.key === "Enter") {
        //     updateTodos(todoList.concat([{ label: userInput, done: false }]));
        //     setUserInput("");
        //   }

        try {
            const docRef = await addDoc(collection(firestore, "recipes"), {
                todo: todo
              //  ingredients: [{ name: 'tomatoes', calories: 50 }, { name: 'rice', calories: 200 }],
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    // read data;: getDocs functions
    // useEffect hook to fetch data after each renderind
    // useState hook to handle the data gotten from Firestore

    const fetchPost = useCallback(async () => {

        await getDocs(collection(firestore, "todos"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
                console.log(todos, newData);
            })

    }, [])

    
    useEffect(() => {
        fetchPost();
    }, [fetchPost])



    // const removeTodo = (index) => {
   
    //     // const newTodos = setTodoList(todoList.filter((list, key) => index !== key));
    //     const newTodos = todoList.filter((list, key) => index !== key);
    //     updateTodos(newTodos);
    
    //     return console.log(todoList);
    //   };
    
      // [...] spread operator , creat copy of the element
    
    //   const addTodoHandler = (event) => {
    //     event.preventDefault();
    //     if (event.key === "Enter") {
    //       updateTodos(todoList.concat([{ label: userInput, done: false }]));
    //       setUserInput("");
    //     }
    //   };
    const todoList = (todo, i) => {
        // return <Todo key={i} todo={todo}/>
     // return ( <Todo key ={i}  index={index} todo={todo} removeTodo={removeTodo}/>)
     return(   <p key={i}> {todo.todo}
     </p>)
}

    

    // input tag (to take the user’s input), a button with an :
    //onClick function (we will be using that to post data to our Firestore), and an 
    //onChange function that handles the states.

    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                <NavLink to="/newRecipe">Go</NavLink>
                    Todo-App
                </h1>

                <div>

                    <div>
                        <input
                        value={userInput}
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>

                </div>

                <div className="todo-content" style={{color:"white"}}>
                    {
                        todos.map(todoList)
                    }
                </div>
            </div>
        </section>
    )
}

