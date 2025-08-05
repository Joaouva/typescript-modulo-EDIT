import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Pick para criar um tipo de preview de um objeto complexo.";
const solution = `type ProductPreview = Pick<Product, 'id' | 'name' | 'price' | 'image'>;`;

const Exercise134: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 134" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 134 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise134;
