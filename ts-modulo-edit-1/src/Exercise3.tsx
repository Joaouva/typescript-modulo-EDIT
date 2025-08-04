import React from "react";
import Exercise from "./Exercise";

const description = "Create a boolean variable 'isActive' and set it to true.";
const solution = "let isActive: boolean = true;";

const Exercise3: React.FC = () => {
	let isActive: boolean = true;
	return (
		<Exercise title="Exercise 3" description={description} solution={solution}>
			Is Active? {isActive ? "Yes" : "No"}
		</Exercise>
	);
};

export default Exercise3;
