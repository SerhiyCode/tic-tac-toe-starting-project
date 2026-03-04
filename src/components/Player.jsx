import { useState } from "react"  
// Додайте функцію, яка викликається при натисканні на <button>.
// В цій функції змініть isEditing на true.
// Показуйте <span className="player-name"> тільки коли isEditing є false.
// Показуйте елемент <input> (який не потрібно налаштовувати), якщо isEditing є true.





export default function Player({name,  symbol}) { 
    const [isEditing, setIsEditing] = useState(false);   
    
function handleEditClick() {
    setIsEditing(true);
  }
    let playerName = <span className="player-name" > {name} </span>; 
    
    if(isEditing) {
      playerName  = <input type="text" required />
    } 
 

    return <li> 
            <span className="player"> 
              {playerName} 
            <span className="Player-symbol">{symbol}</span> 
            </span> 
            <button onClick={handleEditClick}> Edit </button>  
         </li>  
            


}