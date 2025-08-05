import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Create a React functional component that accepts props with a typed interface.";
const solution = `interface UserProps { name: string; age: number; } const UserComponent: React.FC<UserProps> = ({ name, age }) => <div>{name}, {age}</div>;`;

const Exercise111: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 111" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 111 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise111;
