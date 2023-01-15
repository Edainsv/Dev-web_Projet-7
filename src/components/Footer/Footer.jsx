import './Footer.css';
import logo from '../../img/.LOGO.png';

function Footer() {
	return (
		<footer>
			<div>
				<img src={logo} alt="Logo Kasa" />
			</div>

			<div className="copyright">
				<p>&copy; 2023 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;