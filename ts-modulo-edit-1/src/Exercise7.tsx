import React from "react";
import Exercise from "./Exercise";

const description = "Create an object type for a user with name and age.";
const solution = "type User = { name: string; age: number; };";

const Exercise7: React.FC = () => {
	type User = { name: string; age: number };
	const user: User = { name: "Bob", age: 30 };
	return (
		<Exercise title="Exercise 7" description={description} solution={solution}>
			User is {user.name}, {user.age} years old
		</Exercise>
	);
};

export default Exercise7;
