import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use the Omit utility type to exclude a property from a type.";
const solution = `type UserPublic = Omit<User, 'password' | 'token'>;`;

const Exercise115: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 115" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 115 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise115;
