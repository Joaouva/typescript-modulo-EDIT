import React from "react";
import Exercise from "./Exercise";

const description = "Object with method.";
const solution =
	"const calculator = { sum(a: number, b: number) { return a + b; } };";

const Exercise10: React.FC = () => {
	const calculator = {
		sum(a: number, b: number) {
			return a + b;
		},
	};
	return (
		<Exercise title="Exercise 10" description={description} solution={solution}>
			4 + 6 = {calculator.sum(4, 6)}
		</Exercise>
	);
};

export default Exercise10;
