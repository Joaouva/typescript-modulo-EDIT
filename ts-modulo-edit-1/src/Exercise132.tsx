import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use useState com um tipo que pode ser null ou um objeto.";
const solution = `const [data, setData] = useState<{ name: string; value: number } | null>(null);`;

const Exercise132: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 132" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 132 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise132;
