import logo from '../logo.svg';
import '../App.css'
import { useState } from 'react';
import Another from './Another';


function App() {

    //useState set the default value of the variable
    const [count, setCount] = useState(0); 

    const myStyle = {
        background: 'white',
        color: 'green',
        padding: '50px',
        borderRadius: '10px'
    }

    function minus() {
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    function plus() {
        setCount(count + 1);
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p style={myStyle}>Testing</p>

        <div className="border border-2 p-3">
            <span>{count}</span>
            <br />
            <div className="row border">
            
            
                <div className="col">
                    <button onClick={minus}>
                        -
                    </button>
                </div>
                <div className="col">
                         <button onClick={plus}>
                        +
                    </button>
                </div>
            </div>
        </div>

        <Another
        name="Rene"
        age="22"
        company="Sun*"
        />

        {/* {true &&
        <p>This is a combination = {3 + 5} oooh its already responsive I see</p>} */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
