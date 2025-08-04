import React from "react";
import Exercise from "./Exercise";

const description =
	"Use a union type for a variable that can be string or number.";
const solution = "let id: string | number = 'abc';";

const Exercise13: React.FC = () => {
	let id: string | number = "abc";
	return (
		<Exercise title="Exercise 13" description={description} solution={solution}>
			ID is {id}
		</Exercise>
	);
};

export default Exercise13;
