import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para tipos de autenticação (Local, OAuth, JWT, SSO).";
const solution = `enum TipoAutenticacao { Local = 'local', OAuth = 'oauth', JWT = 'jwt', SSO = 'sso' }`;

const Exercise102: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 102" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 102 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise102;
