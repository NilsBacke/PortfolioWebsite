import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Profile from './components/Profile';

const App: React.FC = () => {
	return (
		<div className="App">
			<NavBar />
			<Header />
			<Profile />
		</div>
	);
};

export default App;
