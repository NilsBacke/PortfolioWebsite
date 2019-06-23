import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

const App: React.FC = () => {
	return (
		<div className="App">
			<NavBar />
			<Header />
		</div>
	);
};

export default App;
