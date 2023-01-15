import './Banner.css';
import banner from '../../img/banner.svg';

function Banner() {
	return (
		<div className="banner">
			<img src={banner} alt="Bannière" />
			<div className="background">
				<h2>Chez vous, partout et ailleurs</h2>
			</div>
		</div>
	);
}

export default Banner;