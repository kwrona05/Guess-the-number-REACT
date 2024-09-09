
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('')

  const handleClick = () => {
      const numberToGuess = Math.floor(Math.random() * 20);
  }


  const medium = () => {
    const numberToGuess = Math.floor(Math.random() * 50);
  }

  const hard = () => {

    const numberToGuess = Math.floor(Math.random() * 100);
  }

  const submit = () => {
    const input = document.getElementById('input')
  }

  return (
    <div className="container">
      <header>
        <h1>Guess the number</h1>
        <p>Can you beat the computer?</p>
      </header>
      <div className="buttons">
        <button className="easy" onClick={handleClick}>Easy</button>
        <button className="medium" onClick={medium}>Medium</button>
        <button className="hard" onClick={hard}>Hard</button>
      </div>
      <div className="game-container">
        <input id="input" className="user-number" placeholder="Enter number" />
        <button type="submit">Submit</button>
        <p id="result" className="result-text"></p>
      </div>
    </div>
  );
}
  
export default App;