import React from "react";
import Exercise from "./Exercise";

const description =
	"Use Record to create a type with keys of string and values of number.";
const solution =
	"let scores: Record<string, number> = { math: 90, english: 80 };";

const Exercise20: React.FC = () => {
	let scores: Record<string, number> = { math: 90, english: 80 };
	return (
		<Exercise title="Exercise 20" description={description} solution={solution}>
			Math = {scores.math}, English = {scores.english}
		</Exercise>
	);
};

export default Exercise20;
