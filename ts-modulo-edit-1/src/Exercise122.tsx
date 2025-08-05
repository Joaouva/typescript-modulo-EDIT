import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use useState com um tipo complexo (objeto ou array).";
const solution = `const [user, setUser] = useState<User | null>(null); const [items, setItems] = useState<string[]>([]);`;

const Exercise122: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 122" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 122 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise122;
