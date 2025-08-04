import React from "react";
import Exercise from "./Exercise";

const description = "Function with default parameter.";
const solution =
	"function multiply(a: number, b: number = 2) { return a * b; }";

const Exercise9: React.FC = () => {
	function multiply(a: number, b: number = 2) {
		return a * b;
	}
	return (
		<Exercise title="Exercise 9" description={description} solution={solution}>
			5 * 2 = {multiply(5)}
		</Exercise>
	);
};

export default Exercise9;
