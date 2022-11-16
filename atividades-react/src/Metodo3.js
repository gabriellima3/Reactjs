/*O método getSnapshotBe beforeeUpdate() é invocado pouco antes do DOM ser renderizado. Ele é usado para armazenar os valores anteriores do estado após a atualização do DOM.

Qualquer valor retornado pelo método getSnapshotBeforeUpdate() será usado como parâmetro para o método componentDidUpdate(). Esta função é sempre usada juntamente com o método componentDidUpdate(), mas vice-versa não é verdade.*/


import React from 'react';
class App extends React.Component {

// Initializing the state
state = {
	name: 'teste',
};

componentDidMount() {

	// Changing the state after 1 sec
	setTimeout(() => {
	this.setState({ name: 'Gabriel' });
	}, 1000);
}

getSnapshotBeforeUpdate(prevProps, prevState) {

	// Displaying the previous value of the state
	document.getElementById('prev').innerHTML =
	'Previous Name: ' + prevState.name;
}

componentDidUpdate() {

	// Displaying the current value of the state
	document.getElementById('new').innerHTML =
	'Current Name: ' + this.state.name;
}

render() {
	return (
	<div>
		<div id="prev"></div>
		<div id="new"></div>
	</div>
	);
}
}

export default App;
