import './Banner.css';
import banner_img from '../../img/banner.svg';

function Banner(props) {
	return (
		<div className="banner">
			<img src={props.img} alt="Bannière" />
			
			<div className="background">
				<h2>Chez vous, partout et ailleurs</h2>
			</div>
		</div>
	);
}

export default Banner;