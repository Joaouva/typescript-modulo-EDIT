import React from "react";
import Exercise from "./Exercise";

const description = "Create an enum for colors.";
const solution = "enum Color { Red, Green, Blue }";

const Exercise12: React.FC = () => {
	enum Color {
		Red,
		Green,
		Blue,
	}
	const favorite: Color = Color.Green;
	return (
		<Exercise title="Exercise 12" description={description} solution={solution}>
			Favorite color index is {favorite}
		</Exercise>
	);
};

export default Exercise12;
