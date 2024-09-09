import EasyBtn from "./button-easy"

function App() {
  const yourNumber = input.value
  return(
    <div className="container">
      <header>
        <h1>Gues the number</h1>
        <p>Can you beat the computer?</p>
      </header>
      <menu className="buttons">
        <EasyBtn></EasyBtn>
        <button className="medium">Medium</button>
        <button className="hard">Hard</button>
      </menu>
      <div className="game-container">
        <strong className="try">5</strong>
        <input className="user-number" placeholder="Enter number"></input>
        <p className="result-text"></p>
      </div>
    </div>
  )
}
export default App