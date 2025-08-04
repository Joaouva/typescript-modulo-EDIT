import React from "react";
import Exercise from "./Exercise";

const description = "Function with optional parameter.";
const solution =
	"function greet(name?: string) { return name ? `Hello, ${name}` : 'Hello'; }";

const Exercise8: React.FC = () => {
	function greet(name?: string) {
		return name ? `Hello, ${name}` : "Hello";
	}
	return (
		<Exercise title="Exercise 8" description={description} solution={solution}>
			{greet()} / {greet("Sam")}
		</Exercise>
	);
};

export default Exercise8;
