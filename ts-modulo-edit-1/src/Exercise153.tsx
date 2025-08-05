import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente que aceita um contexto tipado.";
const solution = `interface ContextType { theme: 'light' | 'dark'; toggleTheme: () => void; } const ThemeContext = React.createContext<ContextType | undefined>(undefined);`;

const Exercise153: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 153" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 153 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise153;
