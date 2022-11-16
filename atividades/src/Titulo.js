import React from 'react';
/*
class Titulo extends React.Component {
    render(){
        return <h2>Componente Titulo com classe</h2>;
    }
}

class Titulo extends React.Component {
    render(){
        return <h2>{this.props.texto}</h2>;
    }
}

class Titulo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "FATEC",
            texto: "Faculdade de Tecnologia de Presidente Prudente",
            link: "https://www.fatecpp.edu.br"
        }
    }
*/
class Titulo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: this.props.titulo,
            texto: this.props.texto,
            link: this.props.link
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.titulo}</h1>
                <p>{this.state.texto}</p>
                <a href={this.state.link}>{this.state.link}</a>
            </div>
        );
    };
}
export default Titulo;