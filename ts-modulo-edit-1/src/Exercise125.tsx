import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Omit para criar um tipo que exclui propriedades sensíveis.";
const solution = `type PublicUser = Omit<User, 'password' | 'token' | 'secretKey'>;`;

const Exercise125: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 125" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 125 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise125;
