import React from "react";
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader = <Child/>;
        };
        return(
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Apague o Titulo</button>
            </div>
        );
    }
}
class Child extends React.Component{
    componentWillUnmount(){
        alert("O componente Header está prestes a ser desmontado.");
    }
    render(){
        return(
                <h1>Olá Mundo</h1>
        );
    }
}

export default Container;