import React from "react";
import Exercise from "./Exercise";

const description = "Use Partial to make all properties of a type optional.";
const solution =
	"type User = { name: string; age: number }; let partialUser: Partial<User> = { name: 'Eve' };";

const Exercise19: React.FC = () => {
	type User = { name: string; age: number };
	let partialUser: Partial<User> = { name: "Eve" };
	return (
		<Exercise title="Exercise 19" description={description} solution={solution}>
			Partial User is {partialUser.name}
		</Exercise>
	);
};

export default Exercise19;
