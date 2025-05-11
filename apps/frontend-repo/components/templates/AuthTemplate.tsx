'use client';

import { Container, Box, Paper } from '@mui/material';
import { ReactNode } from 'react';

interface AuthTemplateProps {
  children: ReactNode;
}

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            width: '100%',
            maxWidth: 800,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Container>
  );
};

export default AuthTemplate;
