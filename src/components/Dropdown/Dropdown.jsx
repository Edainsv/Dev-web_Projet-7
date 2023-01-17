import './Dropdown.css';

import logo_arrow_dropdown from '../../img/logo_arrow_dropdown.png';

function Dropdown(props, isOpen) {
	isOpen = true;

	function dropdownAction(e) {
		if (isOpen == true) {
			isOpen = false;
		} else {
			isOpen = true
		}

		console.log(e.target);
	}

	return (
		<div className="dropdown">
			<div				
				className="entete"
				onClick={(e) => dropdownAction(e)}
			>
				<div>
					<h2>{props.title}</h2>
				</div>

				<div>
					<img src={logo_arrow_dropdown} alt="Flèche de menu déroulant" />
				</div>
			</div>

			<div className="content">
				<p>{props.content}</p>
			</div>
		</div>
	);
}


export default Dropdown;
