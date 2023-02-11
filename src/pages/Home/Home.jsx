import Data from '../../datas/data.json';
import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

import banner_img from '../../img/banner.svg';

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

export default function Home() {
	return (
		<div>
			<Banner img={banner_img} content="Chez vous, partout et ailleurs" />

			<main>
				<div id="hebergements">
					{ Data.map((card) => (
						<Link
							key={`${card.id}`}
							to={`/logement/${card.id}`}
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
		</div>
	);
}

