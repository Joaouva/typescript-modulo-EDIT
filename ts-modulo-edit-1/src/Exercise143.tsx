import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente que aceita um slot tipado.";
const solution = `interface SlotProps { header?: React.ReactNode; content: React.ReactNode; footer?: React.ReactNode; } const SlotComponent: React.FC<SlotProps> = ({ header, content, footer }) => <div>{header}{content}{footer}</div>;`;

const Exercise143: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 143" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 143 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise143;
