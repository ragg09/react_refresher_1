import React, { useEffect, useRef } from 'react'
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodosContext } from '../context/TodosContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function App() {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [name, setName] = useLocalStorage('name', '')
    const [idCount, setIdCount] = useLocalStorage('idCount', 0)
    const nameInputEl = useRef(null);
    const nodeRefTodoList = React.useRef(null);
    const nodeRefNoTodoList = React.useRef(null);

    
    useEffect(()=> {
        nameInputEl.current.focus();

        //get data from local storage even after reload
        // setName(JSON.parse(localStorage.getItem('name')) ?? '');


        // // didUnmount
        // return function testing(){
        //     console.log("cleaning up");
        // }
    },[name])

    // useEffect(()=> {
    //     console.log("woring");
    // },[name])


    function handleNameInput(event) {
        setName(event.target.value)
        // localStorage.setItem('name', JSON.stringify(event.target.value))
    }

  return (
    <TodosContext.Provider 
    value={
        {   todos, 
            setTodos, 
            idCount, 
            setIdCount, 
        }
    }
    >
        <div className='todo-app'>

            <h1>Total Todo {todos.length}</h1>

            <form className='mb-1' action="#" >
                    <input 
                    className="todo-input" 
                    type="text" 
                    placeholder='Enter your name' 
                    ref={nameInputEl}
                    value={name}
                    onChange={handleNameInput}
                    />
            </form>

            <CSSTransition
                nodeRef={nodeRefNoTodoList}
                in={name.length > 0}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
                >

                <h3 className='mb-3' ref={nodeRefNoTodoList}>Hello, {name}</h3>
            </CSSTransition>

            

            <TodoForm />

            <SwitchTransition mode='out-in'>
                <CSSTransition nodeRef={nodeRefTodoList} key={todos.length > 0} timeout={300} classNames="slide-vertical" unmountOnExit>
                    <div ref={nodeRefTodoList}>
                        {todos.length > 0 ? (
                            <TodoList />
                        ) : (
                            <NoTodos/>
                        )}
                    </div>
                </CSSTransition>
            </SwitchTransition>

            {/* {todos.length > 0 ? (
                <TodoList />
            ) : (
                <NoTodos/>
            )} */}

            {/* <CSSTransition
                nodeRef={nodeRefTodoList}
                in={todos.length > 0}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
                >
                    <div ref={nodeRefTodoList}>
                        <TodoList />
                    </div>
            </CSSTransition>

            <CSSTransition
                nodeRef={nodeRefNoTodoList}
                in={todos.length === 0}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
                >
                    <div ref={nodeRefNoTodoList}>
                        <NoTodos/>
                    </div>
            </CSSTransition> */}



        </div>
    </TodosContext.Provider>

    
  )
}
