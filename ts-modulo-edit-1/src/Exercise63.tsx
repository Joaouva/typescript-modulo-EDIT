import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de utilizadores.";
const solution = `type TipoUtilizador = 'admin' | 'user' | 'moderator' | 'guest';`;

const Exercise63: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 63" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 63 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise63;
