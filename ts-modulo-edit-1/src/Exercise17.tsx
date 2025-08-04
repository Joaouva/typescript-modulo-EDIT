import React from "react";
import Exercise from "./Exercise";

const description =
	"Use type assertion to treat a variable as a different type.";
const solution =
	"let someValue: any = 'abc'; let strLength: number = (someValue as string).length;";

const Exercise17: React.FC = () => {
	let someValue: any = "abc";
	let strLength: number = (someValue as string).length;
	return (
		<Exercise title="Exercise 17" description={description} solution={solution}>
			Length is {strLength}
		</Exercise>
	);
};

export default Exercise17;
