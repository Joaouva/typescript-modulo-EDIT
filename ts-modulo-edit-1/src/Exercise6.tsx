import React from "react";
import Exercise from "./Exercise";

const description = "Write a function that adds two numbers.";
const solution = "function add(a: number, b: number): number { return a + b; }";

const Exercise6: React.FC = () => {
	function add(a: number, b: number): number {
		return a + b;
	}
	return (
		<Exercise title="Exercise 6" description={description} solution={solution}>
			2 + 3 = {add(2, 3)}
		</Exercise>
	);
};

export default Exercise6;
