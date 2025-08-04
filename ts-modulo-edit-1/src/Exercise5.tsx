import React from "react";
import Exercise from "./Exercise";

const description = "Create a tuple for a product: [string, number].";
const solution = "let product: [string, number] = ['Book', 10];";

const Exercise5: React.FC = () => {
	let product: [string, number] = ["Book", 10];
	return (
		<Exercise title="Exercise 5" description={description} solution={solution}>
			Product is {product[0]} - ${product[1]}
		</Exercise>
	);
};

export default Exercise5;
