import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de configuração.";
const solution = `type TipoConfiguracao = 'desenvolvimento' | 'producao' | 'teste' | 'staging';`;

const Exercise83: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 83" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 83 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise83;
