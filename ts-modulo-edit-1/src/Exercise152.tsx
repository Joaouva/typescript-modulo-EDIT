import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use useState com um tipo que pode ser undefined ou um valor.";
const solution = `const [value, setValue] = useState<string | undefined>(undefined);`;

const Exercise152: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 152" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 152 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise152;
