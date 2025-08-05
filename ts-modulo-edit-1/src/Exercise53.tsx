import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que implementam um sistema de observadores.";
const solution = `const observer = { observers: new Map(), subscribe: (event: string, callback: Function) => { if (!observer.observers.has(event)) observer.observers.set(event, []); observer.observers.get(event).push(callback); }, notify: (event: string, data: any) => { const callbacks = observer.observers.get(event) || []; callbacks.forEach(callback => callback(data)); } };`;

const Exercise53: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 53" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 53 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise53;
