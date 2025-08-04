import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a string variable 'studentName' and assign your name.";
const solution = "let studentName: string = 'Alice';";

const Exercise2: React.FC = () => {
	let studentName: string = "Alice";
	return (
		<Exercise title="Exercise 2" description={description} solution={solution}>
			Student Name is {studentName}
		</Exercise>
	);
};

export default Exercise2;
