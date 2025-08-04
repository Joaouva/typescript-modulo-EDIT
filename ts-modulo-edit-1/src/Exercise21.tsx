import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a React functional component that accepts props with a typed interface.";
const solution = `interface GreetingProps { name: string; }\nconst Greeting: React.FC<GreetingProps> = ({ name }) => <div>Hello, {name}</div>;`;

const Greeting: React.FC<{ name: string }> = ({ name }) => (
	<div>Hello, {name}</div>
);

const Exercise21: React.FC = () => {
	return (
		<Exercise title="Exercise 21" description={description} solution={solution}>
			<Greeting name="Student" />
		</Exercise>
	);
};

export default Exercise21;
