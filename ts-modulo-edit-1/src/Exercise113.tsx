import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Create a component that receives a callback function as a prop and types it.";
const solution = `interface ButtonProps { onClick: (event: React.MouseEvent) => void; } const Button: React.FC<ButtonProps> = ({ onClick }) => <button onClick={onClick}>Click</button>;`;

const Exercise113: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 113" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 113 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise113;
