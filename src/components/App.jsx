import React, { useState } from 'react'
import '../reset.css';
import '../App.css';

export default function App() {
    const [todos, setTodos] = useState([
       {
            id: 1,
            title: 'Finised',
            isComplete: true,
       },
       {
            id: 2,
            title: 'In progress',
            isComplete: false,
       },
       {
            id: 3,
            title: 'Am trying',
            isComplete: false,
       } 
    ]);


    const [todoInput, setTodoInput] = useState("");
    

    //event handler || getting value from input
    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    //event handler || deleting todolist using its id
    function handleDelete(id) {
        //filtering method uses loop to delete an array if conditions are met
        setTodos([...todos].filter(todo => todo.id !== id));
    }


    //adding todo list
    function addTodoList(event) {

        event.preventDefault();
        // alert('working!!!!');

        //simple trapping
       if(todoInput.trim().length === 0){
            setTodoInput("");
            return;
       }

        //other than push, you can add value via this syntax
        setTodos([...todos, {
            id: todos.length + 1, //common sense
            title: todoInput, //value was being handled on handleInput
            isComplete: false,
        },]);

        //after pushing, state should be cleared for the next usage
        setTodoInput("");

    }

    // ()=> , this is a callbackfunction, preventing function from running right away on the loop


  return (
    <div className='todo-app'>

        <h1>{todos.length}</h1>

        <form action="#" onSubmit={addTodoList}>
            <input 
            className="todo-input" 
            type="text" 
            placeholder='Enter Text' 
            value={todoInput} 
            onChange={handleInput}
            required
            />
        </form>

        <ul className='todo-list'>

        {/* looping format using map */}
        {todos.map((todo, index) => (
            <li className="todo-item-container" key={todo.id}>
                <div className="todo-item">
                    {todo.isComplete === true 
                    ? 
                    <input type="checkbox" defaultChecked/> 
                    : 
                    <input type="checkbox" />
                    }

                    <span className="todo-item-label">{todo.title}</span>
                    {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
                </div>
                <button 
                className="x-button"
                onClick={()=>handleDelete(todo.id)}
                >
                        <svg
                        className="x-button-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                </button>
            </li>
        ))}


        </ul>




    </div>
  )
}
