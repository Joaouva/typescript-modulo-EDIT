import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente React que aceita props com validação.";
const solution = `interface ValidatedProps { email: string; age: number; } const ValidatedComponent: React.FC<ValidatedProps> = ({ email, age }) => { if (!email.includes('@')) throw new Error('Invalid email'); if (age < 0) throw new Error('Invalid age'); return <div>{email}, {age}</div>; };`;

const Exercise141: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 141" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 141 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise141;
