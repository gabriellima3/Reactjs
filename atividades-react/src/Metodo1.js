import React from "react";
import ReactDOM from 'react-dom';
  
class Metodo1 extends React.Component {
  
  render() {
    return (
      <div>
      <Child name = "Lima"></Child>
      </div>
    )
  }
}
class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        name: "Gabriel"
        };
    }
    static getDerivedStateFromProps(props, state) {
        if(props.name !== state.name){
            //Change in props
            return{
                name: props.name
            };
        }
        return null; // No change to state
    }
    
    render(){
       return (
        <h1> My name is {this.state.name }</h1>
       )
    }
}

export default Metodo1;
/* O método getDerivedStateFromProps() é usado quando o estado de um componente depende de mudanças de props.

getDerivedStateFromProps(props, state) é um método estático que é chamado logo antes do método render() na fase de montagem e atualização no React. Leva props atualizados e o estado atual como argumentos.

Retorna um objeto para atualizar o estado ou nulo para indicar que nada mudou.
    */