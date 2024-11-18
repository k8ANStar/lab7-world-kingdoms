import { useLocation } from "react-router-dom";

const Details = () => {
	const { state } = useLocation();

	if (!state || !state.data) {
		return <p>No country selected. Please choose a country.</p>;
	}

	const { name, population, capital, region, flags } = state.data;

	return (
		<div>
			<h2>{name.common}</h2>
			<img src={flags.png} alt={`${name.common} flag`} width="150" />
			<p>
				<strong>Capital:</strong> {capital ? capital[0] : "N/A"}
			</p>
			<p>
				<strong>Region:</strong> {region}
			</p>
			<p>
				<strong>Population:</strong> {population.toLocaleString()}
			</p>
		</div>
	);
};

export default Details;
