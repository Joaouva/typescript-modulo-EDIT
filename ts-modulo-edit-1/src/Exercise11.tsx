import React from "react";
import Exercise from "./Exercise";

const description = "Create an interface for a car with brand and year.";
const solution = "interface Car { brand: string; year: number; }";

const Exercise11: React.FC = () => {
	interface Car {
		brand: string;
		year: number;
	}
	const car: Car = { brand: "Toyota", year: 2020 };
	return (
		<Exercise title="Exercise 11" description={description} solution={solution}>
			Car is {car.brand}, {car.year}
		</Exercise>
	);
};

export default Exercise11;
