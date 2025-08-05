import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que implementam um sistema de eventos.";
const solution = `const eventEmitter = { listeners: new Map(), on: (event: string, callback: Function) => { if (!eventEmitter.listeners.has(event)) eventEmitter.listeners.set(event, []); eventEmitter.listeners.get(event).push(callback); }, emit: (event: string, data: any) => { const callbacks = eventEmitter.listeners.get(event) || []; callbacks.forEach(callback => callback(data)); } };`;

const Exercise37: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 37" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 37 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise37;
