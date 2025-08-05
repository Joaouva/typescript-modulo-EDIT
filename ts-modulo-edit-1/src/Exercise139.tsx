import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Partial para criar um tipo de configuração com valores por defeito.";
const solution = `type OptionalConfig = Partial<Config> & { required: string; };`;

const Exercise139: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 139" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 139 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise139;
