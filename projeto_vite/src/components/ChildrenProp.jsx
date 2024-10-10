
const ChildrenProp = ( { children , myValue}) => {

return (

    <div>

        <h2>Esse é o titulo</h2>

        { children }

        <p>Valor é: {myValue}</p>

    </div>

)

}

export default ChildrenProp