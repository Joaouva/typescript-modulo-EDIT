import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente React que aceita props condicionais.";
const solution = `interface ConditionalProps { required: string; optional?: string; conditional?: boolean; } const ConditionalComponent: React.FC<ConditionalProps> = ({ required, optional, conditional }) => <div>{required}{optional}{conditional && 'Conditional'}</div>;`;

const Exercise131: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 131" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 131 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise131;
