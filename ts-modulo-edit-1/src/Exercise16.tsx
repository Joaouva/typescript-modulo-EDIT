import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a generic function that returns the first element of an array.";
const solution = "function first<T>(arr: T[]): T { return arr[0]; }";

const Exercise16: React.FC = () => {
	function first<T>(arr: T[]): T {
		return arr[0];
	}
	return (
		<Exercise title="Exercise 16" description={description} solution={solution}>
			First of [1,2,3] is {first([1, 2, 3])}
		</Exercise>
	);
};

export default Exercise16;
