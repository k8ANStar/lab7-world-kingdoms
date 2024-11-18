import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/name/kingdom")
			.then((res) => res.json())
			.then((data) => setCountries(data))
			.catch((err) => console.error("Error fetching data:", err));
	}, []);

	const handleSelection = (event) => {
		const selectedCountry = countries.find(
			(country) => country.cca2 === event.target.value
		);
		navigate(`/countries/${selectedCountry.cca2}`, {
			state: { data: selectedCountry },
		});
	};

	return (
		<div>
			<h1>World Kingdoms</h1>
			<select onChange={handleSelection}>
				<option value="">Select a country</option>
				{countries.map((country) => (
					<option key={country.cca2} value={country.cca2}>
						{country.name.common}
					</option>
				))}
			</select>
			<Outlet />
		</div>
	);
};

export default Countries;
