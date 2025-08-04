import React from "react";
import Exercise from "./Exercise";

const description = "Create an array of numbers called 'scores'.";
const solution = "let scores: number[] = [90, 80, 70];";

const Exercise4: React.FC = () => {
	let scores: number[] = [90, 80, 70];
	return (
		<Exercise title="Exercise 4" description={description} solution={solution}>
			Scores are {scores.join(", ")}
		</Exercise>
	);
};

export default Exercise4;
