import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente que aceita children tipados.";
const solution = `interface ContainerProps { children: React.ReactNode; title: string; } const Container: React.FC<ContainerProps> = ({ children, title }) => <div><h1>{title}</h1>{children}</div>;`;

const Exercise123: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 123" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 123 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise123;
