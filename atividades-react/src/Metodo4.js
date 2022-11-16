/*O método componentDidUpdate() nos permite executar o código React quando o componente é atualizado. Todas as solicitações de rede que devem ser feitas quando os adereços passados para as alterações de componentes são codificadas aqui.

O componenteDidUpdate()é chamado após o componenteDidMount() e pode ser útil para executar alguma ação quando o estado do componente muda.*/

import React from 'react';

class App extends React.Component {
// Defining the state
state = {
	company: 'FatecPP'
};

componentDidMount() {
	// Changing the state after 600ms
	setTimeout(() => {
	this.setState({ company: ' - Centro Paula Souza' });
	}, 600);
}

componentDidUpdate() {
	document.getElementById('disclaimer').innerHTML =
	'P.s:' + this.state.company;
}

render() {
	return (
	<div>
		<h1 style={{
		margin: 'auto',
		marginTop: '10%',
		border: 'solid 1px black',
		textAlign: 'center',
		fontSize: 50,
		}}>
		Análise e Desenvolvimento de Sistemas
		{this.state.company}
		<div id="disclaimer"></div>
		</h1>
	</div>
	);
}
}

export default App;
