import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use type assertion para aceder a propriedades de um objeto unknown.";
const solution = `const obj: unknown = { name: 'John' }; const name = (obj as { name: string }).name;`;

const Exercise117: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 117" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 117 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise117;
