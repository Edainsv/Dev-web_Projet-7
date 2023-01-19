import './Banner.css';

function Banner(props) {
	return (
		<div className="banner">
			<img src={props.img} alt="Bannière" />
			
			<div className="background">
				<h2>{props.content}</h2>
			</div>
		</div>
	);
}

export default Banner;