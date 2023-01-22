import './Dropdown.css';
import React, { useState } from 'react';

import logo_arrow_dropdown from '../../img/logo_arrow.png';

function Dropdown(props) {
	const [show, changeClass] = useState(true);

	return (
		<div className="dropdown">
			<div
				className="entete"
				onClick={() => changeClass(!show)}
			>
				<div>
					<h2>{props.title}</h2>
				</div>

				<div className={show ? '' : 'reverse'}>
					<img src={logo_arrow_dropdown} alt="Flèche de menu déroulant" />
				</div>
			</div>

			<div className={show ? 'content' : 'content hide-class'}>
				<p>{props.content}</p>
			</div>
		</div>
	);
}


export default Dropdown;
