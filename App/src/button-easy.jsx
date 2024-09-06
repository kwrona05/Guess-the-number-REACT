function EasyBtn() {
const handleClick = () => {
    // console.log("clicked")
    const numberToGuess = Math.floor(Math.random() * 20)
    // console.log(numberToGuess)
}
return(
    <button onClick={handleClick}>Easy</button>
)
}
export default EasyBtn