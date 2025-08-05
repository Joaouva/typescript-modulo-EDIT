import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto que implementa um padrão singleton.";
const solution = `class Database { private static instance: Database; private constructor() {} static getInstance(): Database { if (!Database.instance) { Database.instance = new Database(); } return Database.instance; } }`;

const Exercise23: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 23" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 23 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise23;
