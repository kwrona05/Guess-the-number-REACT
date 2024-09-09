
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const handleClick = () => {
    const input = document.getElementById('input');
    const yourNumber = parseInt(input.value, 10); // Convert input to a number
    const p = document.getElementById('result');
    
    const numberToGuess = Math.floor(Math.random() * 20);

    if (isNaN(yourNumber)) {
      alert('Please enter a valid number');
      return;
    }

    if (yourNumber > numberToGuess) {
      p.textContent = "Too high";
    } else if (yourNumber < numberToGuess) {
      p.textContent = "Too low";
    } else {
      p.textContent = "Congrats! You are a winner!";
    }

    console.log(numberToGuess);
  };

  const medium = () => {
    const input = document.getElementById('input');
    const yourNumber = parseInt(input.value, 10); // Convert input to a number
    const p = document.getElementById('result');

    const numberToGuess = Math.floor(Math.random() * 50);

    if (isNaN(yourNumber)) {
      alert('Please enter a valid number');
      return;
    }

    if (yourNumber > numberToGuess) {
      p.textContent = "Too high";
    } else if (yourNumber < numberToGuess) {
      p.textContent = "Too low";
    } else {
      p.textContent = "Congrats! You are a winner!";
    }

    console.log(numberToGuess);
  };

  const hard = () => {
    const input = document.getElementById('input');
    const yourNumber = parseInt(input.value, 10); // Convert input to a number
    const p = document.getElementById('result');

    const numberToGuess = Math.floor(Math.random() * 100);

    if (isNaN(yourNumber)) {
      alert('Please enter a valid number');
      return;
    }

    if (yourNumber > numberToGuess) {
      p.textContent = "Too high";
    } else if (yourNumber < numberToGuess) {
      p.textContent = "Too low";
    } else {
      p.textContent = "Congrats! You are a winner!";
    }

    console.log(numberToGuess);
  };

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
        <p id="result" className="result-text"></p>
      </div>
    </div>
  );
}

export default App;