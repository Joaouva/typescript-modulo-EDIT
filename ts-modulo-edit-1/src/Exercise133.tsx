import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente que aceita um render prop tipado.";
const solution = `interface RenderProps<T> { data: T[]; render: (item: T, index: number) => React.ReactNode; } const RenderList = <T,>({ data, render }: RenderProps<T>) => <div>{data.map(render)}</div>;`;

const Exercise133: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 133" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 133 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise133;
