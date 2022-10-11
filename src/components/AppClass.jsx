//this is the old way 


import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
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
            ]
        }
    }


  render() {
    return (
        <div className='todo-app'>
        <ul className='todo-list'>
        {this.state.todos.map((todo, index) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">{todo.title}</span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
              </div>
              <button className="x-button">
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
}
