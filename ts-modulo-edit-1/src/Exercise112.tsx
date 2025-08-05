import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use the useState hook with a typed state variable.";
const solution = `const [count, setCount] = useState<number>(0);`;

const Exercise112: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 112" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 112 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise112;
