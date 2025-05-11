'use client';

import React from 'react';
import AuthTemplate from '@/components/templates/AuthTemplate';
import RegisterSection from '@/components/organisms/RegisterSection';
import { Typography } from '@mui/material';

export default function RegisterPage() {
  return (
    <AuthTemplate>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <RegisterSection />
    </AuthTemplate>
  );
}
