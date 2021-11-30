import React from "react";
import { Link } from "react-router-dom";

const SingleArticlePage = () => {
	return (
		<div class="card text-center">
			<div class="card-body">
				<h5 class="card-title">News Title</h5>
				<p class="card-text">News Details</p>
				<Link to="/">Go Back</Link>
			</div>
		</div>
	);
};

export default SingleArticlePage;
