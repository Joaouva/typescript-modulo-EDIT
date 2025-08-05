import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um array e retorna um objeto agrupado por uma propriedade.";
const solution = `function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> { return arr.reduce((groups, item) => { const groupKey = String(item[key]); groups[groupKey] = groups[groupKey] || []; groups[groupKey].push(item); return groups; }, {} as Record<string, T[]>); }`;

const Exercise46: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 46" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 46 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise46;
