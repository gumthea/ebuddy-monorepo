'use client';

import React from 'react';
import AuthTemplate from '@/components/templates/AuthTemplate';
import LoginSection from '@/components/organisms/LoginSection';
import { Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <AuthTemplate>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <LoginSection />
    </AuthTemplate>
  );
}
