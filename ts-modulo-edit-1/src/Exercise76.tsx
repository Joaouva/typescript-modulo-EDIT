import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de logs.";
const solution = `interface SistemaLogs { info: (msg: string) => void; error: (msg: string) => void; warn: (msg: string) => void; }`;

const Exercise76: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 76" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 76 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise76;
