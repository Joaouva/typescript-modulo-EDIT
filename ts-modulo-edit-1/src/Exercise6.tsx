import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que soma dois números.";
const solution = `function soma(a: number, b: number): number {
  return a + b;
}`;

const Exercise6: React.FC = () => {
	const soma = (a: number, b: number): number => {
		return a + b;
	};

	return (
		<Exercise title="Exercise 6" description={description} solution={solution}>
			<Box>
				<Typography variant="body1">Resultado: {soma(5, 3)} (5 + 3)</Typography>
			</Box>
		</Exercise>
	);
};

export default Exercise6;
