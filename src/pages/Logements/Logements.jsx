import { useParams } from "react-router-dom";
import Data from '../../datas/data.json';
import Carousel from '../../components/Carousel/Carousel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Rating from '../../components/Rating/Rating';
import Tag from '../../components/Tag/Tag';
import './Logements.css';


export default function Logements() {
	const { id } = useParams();
	const dataLogement = Data.find((product) => product.id === id);

	if (dataLogement) {
		return (
			<main>
				<Carousel pictures={dataLogement.pictures} />

				<div className="header_location">
					<div>
						<h2>{dataLogement.title}</h2>
						<h3>{dataLogement.location}</h3>

						<ul className="tag">
							{dataLogement.tags.map((value, index) => (
								<Tag key={index} contentTag={value} />
							))}
						</ul>
					</div>

					<div className="header_location_right">
						<div className="info_profil">
							<span>{dataLogement.host.name}</span>
							<img src={dataLogement.host.picture} alt="Photo de profil" />
						</div>

						<div className="rating">
							<Rating rating={dataLogement.rating} />
						</div>
					</div>
				</div>

				<section className="main_content_location">
					<Dropdown
						title="Description"
						content={dataLogement.description}
					/>

					<Dropdown
						title="Equipements"
						content={
							dataLogement.equipments.map((value, index) => (
							<li key={index}>{value}</li>
						))}
					/>
				</section>
			</main>
		);
	} else {
		window.location = '/'
	}
}