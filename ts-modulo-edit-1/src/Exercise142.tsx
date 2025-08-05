import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use useState com um tipo que pode ser um array vazio ou preenchido.";
const solution = `const [items, setItems] = useState<string[]>([]);`;

const Exercise142: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 142" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 142 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise142;
