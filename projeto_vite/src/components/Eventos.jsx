
const Eventos = ({ numero }) => {

    const MyEvent = () =>  {

        console.log(`Opa, fui ativado  ${numero}`)

    }

    return (

       <>
       
       <button onClick={MyEvent}>Adicionar Evento</button>
       
       </>     

    )
}

export default Eventos;