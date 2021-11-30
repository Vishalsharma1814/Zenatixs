import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const url =
	"https://content.guardianapis.com/search?api-key=3d42a909-c15a-4788-b93b-49079852c173";

const Home = () => {
	const [userData, setUserData] = useState([{}]);
	const getGiHubUserWithAxios = useCallback(async () => {
		const response = await axios.get(url);
		setUserData(response.data.response.results);
		console.log(userData);
	}, [userData]);
	useEffect(() => {
		getGiHubUserWithAxios();
	}, [getGiHubUserWithAxios]);

	return (
		<>
			<div className="row row-cols-1 row-cols-md-3 g-4 ">
				{userData.map((item, i) => (
					<div className="card" key={i}>
						<div className="card-body" style={{ textAlign: "center" }}>
							<Link to={`/singlenews/${item.id}`}>
								<h5 className="card-title">{item.sectionName}</h5>
							</Link>
							<p className="card-text">{item.webTitle}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Home;
