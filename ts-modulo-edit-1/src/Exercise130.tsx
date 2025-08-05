import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Pick e Omit juntos para criar tipos derivados.";
const solution = `type UserSummary = Pick<User, 'id' | 'name'> & Omit<User, 'password' | 'email'>;`;

const Exercise130: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 130" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 130 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise130;
