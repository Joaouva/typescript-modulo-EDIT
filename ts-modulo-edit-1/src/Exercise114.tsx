import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use the Pick utility type to select specific properties from a type.";
const solution = `type UserPreview = Pick<User, 'name' | 'email'>;`;

const Exercise114: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 114" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 114 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise114;
