import './Header.css';
import logo from '../../img/.LOGO-1.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Link to="/">
				<img src={logo} alt="Kasa" />
			</Link>

			<div className="header">
				<ul>
					<li><Link to="/">Accueil</Link></li>
					<li><Link to="/about">A propos</Link></li>
				</ul>
			</div>
		</header>
	);
}

export default Header;