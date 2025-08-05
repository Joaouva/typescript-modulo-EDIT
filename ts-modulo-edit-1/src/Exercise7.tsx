import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description =
	"Crie um tipo de objeto para um utilizador com nome e idade.";
const solution = `interface Utilizador {
  nome: string;
  idade: number;
}`;

const Exercise7: React.FC = () => {
	interface Utilizador {
		nome: string;
		idade: number;
	}

	const utilizador: Utilizador = {
		nome: "João Silva",
		idade: 25,
	};

	return (
		<Exercise title="Exercise 7" description={description} solution={solution}>
			<Box>
				<Typography variant="body1">Nome: {utilizador.nome}</Typography>
				<Typography variant="body1">Idade: {utilizador.idade}</Typography>
			</Box>
		</Exercise>
	);
};

export default Exercise7;
