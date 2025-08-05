import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use type assertion para aceder a propriedades de um objeto any.";
const solution = `const obj: any = { name: 'John', age: 30 }; const name = obj.name as string;`;

const Exercise137: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 137" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 137 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise137;
