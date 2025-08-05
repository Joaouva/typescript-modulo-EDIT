import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente React que aceita props com valores por defeito.";
const solution = `interface DefaultProps { name: string; age?: number; active?: boolean; } const DefaultComponent: React.FC<DefaultProps> = ({ name, age = 18, active = true }) => <div>{name}, {age}, {active}</div>;`;

const Exercise151: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 151" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 151 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise151;
