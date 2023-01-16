import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Page_404 from './pages/Page_404/Page_404';

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />

				<Route path="*" element={<Page_404 />} />
			</Routes>

		</div>		
	);
}

export default App;
