import React from "react";
import Exercise from "./Exercise";

const description =
	"Declare a variable 'age' of type number and assign it the value 25.";
const solution = "let age: number = 25;";

const Exercise1: React.FC = () => {
	let age: number = 25;
	return (
		<Exercise title="Exercise 1" description={description} solution={solution}>
			Age is {age}
		</Exercise>
	);
};

export default Exercise1;
