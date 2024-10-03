
import { useState } from 'react'

const PrevState = () => {


    const [users, setUsers] = useState([

        { id:1, nome:'Carlos', idade:40 },
        { id:2, nome:'Joana', idade:35 },
        { id:3, nome:'Ana', idade: 26 }


    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {

            return prevUsers.filter((users) => randomNumber !== users.id);
        });

    }
    
return (

    <div>

    <button onClick={deleteRandom}>Delete random user </button>

    </div>

)

}

export default PrevState;