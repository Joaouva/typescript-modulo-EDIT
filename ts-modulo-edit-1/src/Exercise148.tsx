import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo que combina diferentes tipos utilitários.";
const solution = `type ComplexType = Readonly<Pick<User, 'id'>> & Partial<Omit<User, 'id'>>;`;

const Exercise148: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 148" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 148 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise148;
