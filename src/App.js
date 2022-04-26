import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers';
import { useState } from 'react';

function App() {
  const [displayFact, setDisplayFact] = useState(false)
  const [numberInput, setNumberInput] = useState('')

const handleChangeInput=(event)=>{
  setNumberInput(event.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random facts about a number</h1>
      </header>
      <main>
        <div>
          <div>
            Type a number:
            <input value={numberInput} onChange={handleChangeInput}/>
            <button>Clear</button>
          </div>         
          <Numbers displayFact={displayFact} numberInput={numberInput}/>
        </div>
      </main>
    </div>
  );
}

export default App;
