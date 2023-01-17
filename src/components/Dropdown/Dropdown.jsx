import './Dropdown.css';

function Dropdown(props) {


	return (
		<div className="dropdown">
			<div >
				<h2>{props.title}</h2>
			</div>

			<div>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default ErrorPage;