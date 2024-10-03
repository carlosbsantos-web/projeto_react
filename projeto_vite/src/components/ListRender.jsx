import { useState } from "react";

const ListRender = () => {

    const [list] = useState(['Carlos', 'Ana', 'Maria']);

    const [users] = useState([

        { id:1, nome:'Carlos', idade:40 },
        { id:2, nome:'Joana', idade:35 },
        { id:3, nome:'Ana', idade: 26 }


    ]);
    
return (

<div>

<ul>

{list.map((item) => ( <li key={item}>{item}</li>))}

</ul>

<ul>

    {users.map((user) => (

        <li key={user.id}>{user.nome} - {user.idade}
        </li>

    ))}
    
</ul>
</div>

)


}

export default ListRender;