import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Partial e Pick juntos para criar um tipo de atualização.";
const solution = `type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'phone'>>;`;

const Exercise119: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 119" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 119 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise119;
