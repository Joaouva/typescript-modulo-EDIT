import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um sistema de paginação com métodos para navegar.";
const solution = `interface Paginacao { pagina: number; porPagina: number; total: number; proxima: () => void; anterior: () => void; irPara: (pagina: number) => void; }`;

const Exercise51: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 51" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 51 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise51;
