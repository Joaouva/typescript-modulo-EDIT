import React from "react";
import Exercise from "./Exercise";

const description =
	"Function that accepts a parameter of type string or number and returns its length (if string) or value (if number).";
const solution =
	"function getLength(val: string | number): number { return typeof val === 'string' ? val.length : val; }";

const Exercise15: React.FC = () => {
	function getLength(val: string | number): number {
		return typeof val === "string" ? val.length : val;
	}
	return (
		<Exercise title="Exercise 15" description={description} solution={solution}>
			'Hello' = {getLength("Hello")}, 42 = {getLength(42)}
		</Exercise>
	);
};

export default Exercise15;
