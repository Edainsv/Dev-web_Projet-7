import './Carousel.css';
import logo_arrow from '../../img/logo_arrow.png';

function Carousel() {
	return (
		<div className="carousel">
			<div className="buttons">
				<button className="previous">
					<img src={logo_arrow} alt="" />
				</button>

				<div className="info">
					1/4
				</div>

				<button className="next">
					<img src={logo_arrow} alt="" />
				</button>

				
			</div>

			<img src="" alt="" />
		</div>
	);
}

export default Carousel;
