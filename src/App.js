import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers';
import { useState } from 'react';

function App() {
  const [displayAnimal, setDisplayAnimal] = useState(false)
  const [numberInput, setNumberInput] = useState('')

  const handleChangeInput = (event) => {
    setNumberInput(event.target.value)
  }

  const toggleQuotes = () => {
    if (displayAnimal === false) {
      setDisplayAnimal(true)
    } else {
      setDisplayAnimal(false)
      setNumberInput('')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random animal photos</h1>
      </header>
      <main>
        <div className="number-trivia">
          <div>
            Number: 
            <input value={numberInput} onChange={handleChangeInput} placeholder="1-10"/>
          </div>         
          {displayAnimal === false ? 
            <h2>Type a number between 1-10 to see random animal photos.</h2>
            :
            <Numbers displayAnimal={displayAnimal} numberInput={numberInput} />}
        </div>
        <button onClick={toggleQuotes}>{displayAnimal === false ? "Show photos" : "Clear"}</button>
      </main>
    </div>
  );

}

export default App;
