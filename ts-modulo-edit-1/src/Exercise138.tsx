import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo que torna propriedades específicas readonly.";
const solution = `type PartiallyReadonly = { readonly id: string; readonly createdAt: Date; name: string; email: string; };`;

const Exercise138: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 138" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 138 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise138;
