import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um componente React genérico que renderiza uma lista de itens.";
const solution = `interface ListProps<T> { items: T[]; renderItem: (item: T) => React.ReactNode; } const List = <T,>({ items, renderItem }: ListProps<T>) => <div>{items.map(renderItem)}</div>;`;

const Exercise121: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 121" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 121 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise121;
