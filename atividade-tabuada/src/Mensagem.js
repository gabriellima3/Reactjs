import React from 'react';

class Mensagem extends React.Component {
    exibir = (t) => {
        console.log(t)       
        }
       
    render() {
        const texto = "Olá Mundo";
        return (

                <button type='button' onClick={()=>this.exibir(texto)}>Mensagem no Console</button>
        );
    };
}

export default Mensagem;