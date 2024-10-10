


import style from './Frase.module.css'

const name = 'Paulo'

const If_Else = () => {

return (

    <>
    
    <h3 className={style.fraseContent}>Começando condicional</h3>

    {name === 'Carlos' ? (

        <div>
            <p>Nome está correto</p>
        </div>
    ) : (

        <div>
            <p>Nome não existe</p>
        </div>
        
    )}

    </>
)

}

export default If_Else;