import './Rating.css';
import trueStar from '../../img/true_star.svg';
import falseStar from '../../img/false_star.svg';

const Rating = ({ rating }) => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="stars">
			{stars.map((star) => rating >= star ? (
				<img
					key={star.toString()}
					className="rating__icon"
					src={trueStar}
					alt="etoile de couleur rouge"
				/>
				) : (
				<img
					key={star.toString()}
					className="rating__icon"
					src={falseStar}
					alt="etoile de couleur grise"
				/>
				)
			)}
		</div>
	);
}


export default Rating;