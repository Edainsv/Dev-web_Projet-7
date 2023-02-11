import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logements from './pages/Logements/Logements';
import Page404 from './pages/Page404/Page404';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/logement/:id" element={<Logements />} />

				<Route path="*" element={<Page404 />} />
			</Routes>

			<Footer />
		</div>		
	);
}

export default App;


