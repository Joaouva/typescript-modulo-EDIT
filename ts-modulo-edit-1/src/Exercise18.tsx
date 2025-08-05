import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e retorna uma nova versão modificada.";
const solution = `function updateUser(user: User, updates: Partial<User>): User { return { ...user, ...updates }; }`;

const Exercise18: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 18" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 18 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise18;
