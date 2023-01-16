import { Link } from 'react-router-dom'
import React from 'react';
import Data from '../../datas/data.json';
import './Home.css';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

export default function Home() {
	return (
		<div>
			<Banner />

			<main>
				<div id="hebergements">
					{ Data.map((card) => (
						<Link
							className=""
							key={`${card.id}`}
							to={`/location/${card.id}`}
						>
							<Card
								key={`${card.id}`}
								cover={card.cover}
								title={card.title}
							/>
						</Link>
					)) }
				</div>
			</main>

			<Footer />
		</div>
	);
}