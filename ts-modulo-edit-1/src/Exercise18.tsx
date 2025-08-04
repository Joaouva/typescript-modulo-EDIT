import React from "react";
import Exercise from "./Exercise";

const description = "Create a Readonly object.";
const solution =
	"const point: Readonly<{ x: number; y: number }> = { x: 1, y: 2 };";

const Exercise18: React.FC = () => {
	const point: Readonly<{ x: number; y: number }> = { x: 1, y: 2 };
	return (
		<Exercise title="Exercise 18" description={description} solution={solution}>
			Point is ({point.x}, {point.y})
		</Exercise>
	);
};

export default Exercise18;
