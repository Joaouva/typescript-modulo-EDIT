import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de eventos.";
const solution = `type TipoEvento = 'click' | 'submit' | 'change' | 'focus' | 'blur';`;

const Exercise68: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 68" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 68 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise68;
