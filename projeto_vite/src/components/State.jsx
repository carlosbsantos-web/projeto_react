
import { useState } from "react";

export const State = () => {

    let number = 10;

    const [firstNumber, secondNumber] = useState(26)

  return (

    <div>

    <p>Valor: {number} </p>

    <button onClick={() => ( number = 15 )}> Mudar valor</button>

    <div>
        
    <p>Valor: {firstNumber}</p>

    <button onClick={() => secondNumber(22)


    }>Mudar state</button>

    </div>

    </div>

     

  )
}

export default State;