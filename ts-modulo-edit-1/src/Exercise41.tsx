import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que implementam um sistema de logs.";
const solution = "const logger = { info: (msg: string) => console.log(\`[INFO] ${msg}\`), error: (msg: string) => console.error(\`[ERROR] ${msg}\`), warn: (msg: string) => console.warn(\`[WARN] ${msg}\`) };";

const Exercise41: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 41" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 41 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise41;
