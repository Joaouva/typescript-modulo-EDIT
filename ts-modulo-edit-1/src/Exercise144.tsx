import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Pick para criar um tipo de resumo de um objeto complexo.";
const solution = `type Summary = Pick<ComplexObject, 'id' | 'title' | 'status' | 'createdAt'>;`;

const Exercise144: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 144" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 144 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise144;
