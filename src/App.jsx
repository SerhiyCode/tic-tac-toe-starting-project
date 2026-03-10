import { useState } from "react"
import GameBoard from "./components/GamеBoard"
import Player from "./components/Player" 
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";


function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X'; 

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = '0'; 
    } 
    return currentPlayer;      
}

function App() {   
   const [gameTurns, setGameTurns] = useState([]);  
// const  [activePlayer, setActivePlayer] = useState('X');        
   const activePlayer = deriveActivePlayer(gameTurns);  

   let gameBoard = initialGameBoard; 

   for(const combination of gameTurns) {
    const firstSquareSymbol = gameBoard[] 
    const secondSquareSymbol  
    const thirdSquareSymbol  
    const {row, col} = square; 

    gameBoard[row][col] = player;
  }

   function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : "X"); 
    setGameTurns((prevTurns) => {    
    const currentPlayer = deriveActivePlayer(prevTurns);  

    const updatedTurns = [
      { square: {row: rowIndex, col: colIndex }, player: currentPlayer }, 
       ...prevTurns];  
      return updatedTurns;  
   }); 
  }

  return <main>
        <div id="game-container"> 
      <ol id="players" className="highlight-player">
        <Player InitialName="Player 1" symbol="X" 
          isActive={activePlayer === 'X'}/>
        <Player InitialName="Player 2" symbol="0"  
          isActive={activePlayer === '0'}/>
      </ol> 
      <GameBoard onSelectSquare={handleSelectSquare} 
        board={gameBoard}   />
      </div> 
       <Log turns={gameTurns} />
    </main>    
   } 
 

export default App

