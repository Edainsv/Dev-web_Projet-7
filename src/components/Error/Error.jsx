import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function ErrorPage() {
	return (
		<section className="error_section">
			<span className="_404">404</span>

			<p className="oups">Oups ! La page que vous demandez n'existe pas.</p>

			<Link to="/">
				<div className="errorLink">Retourner sur la page d'accueil</div>
			</Link>
		</section>
	);
}

export default ErrorPage;