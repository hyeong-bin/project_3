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

const toggleQuotes = () => {
  if (displayFact === false) {
    setDisplayFact(true)
  } else if (displayFact === true) {
    setDisplayFact(false)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random facts about a number</h1>
      </header>
      <main>
        <div className="number-trivia">
          <div>
            Type a number:
            <input value={numberInput} onChange={handleChangeInput}/>
          </div>         
          
          {displayFact === false ? 
            <h3>Let's learn a fun fact!</h3>
            :
            <Numbers displayFact={displayFact} numberInput={numberInput} />}
        </div>
        <button onClick={toggleQuotes}>{displayFact === false ? "Show a fact" : "Clear Quote"}</button>
      </main>
    </div>
  );

}

export default App;
