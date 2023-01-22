import React, { useState } from 'react';
import './Carousel.css';
import logo_arrow from '../../img/logo_arrow.png';

function Carousel(props) {
	const [r, changeRender] = useState(0);
	const nbPicture = props.pictures.length;

	const previous = function (e) {
		changeRender(r === 0 ? nbPicture - 1 : r - 1);
	}

	const next = function (e) {
		changeRender(r === nbPicture - 1 ? 0 : r + 1);
	}

	return (
		<div className="carousel">
			<div className="buttons">
				<button className="previous" onClick={previous}>
					<img src={logo_arrow} alt="Flèche gauche" />
				</button>

				<div className="info">
					{r+1}/{nbPicture}
				</div>

				<button className="next" onClick={next}>
					<img src={logo_arrow} alt="Flèche droite" />
				</button>
			</div>

			<img src={props.pictures[r]} alt="Location" />
		</div>
	);
}

export default Carousel;
