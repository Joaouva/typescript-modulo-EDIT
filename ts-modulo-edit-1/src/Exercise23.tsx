import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a component that receives a callback function as a prop and types it.";
const solution = `interface ButtonProps { onClick: () => void; }\nconst Button: React.FC<ButtonProps> = ({ onClick }) => <button onClick={onClick}>Click</button>;`;

const Button: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<button onClick={onClick}>Click</button>
);

const Exercise23: React.FC = () => {
	return (
		<Exercise title="Exercise 23" description={description} solution={solution}>
			<Button onClick={() => alert("Clicked!")} />
		</Exercise>
	);
};

export default Exercise23;
