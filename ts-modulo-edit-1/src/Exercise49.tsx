import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que implementam um sistema de histórico.";
const solution = `const historico = { items: [] as any[], adicionar: (item: any) => { historico.items.push(item); }, obter: () => [...historico.items], limpar: () => { historico.items = []; } };`;

const Exercise49: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 49" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 49 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise49;
