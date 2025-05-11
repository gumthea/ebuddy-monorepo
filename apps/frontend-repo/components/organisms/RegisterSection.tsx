'use client';

import { useState } from "react";
import { Stack, Snackbar, Alert } from "@mui/material";
import RegisterForm from '../molecules/RegisterForm';
import SubmitButton from "../atoms/SubmitButton";
import ErrorMessage from "../atoms/ErrorMessage";
import RedirectText from "../atoms/RedirectText";
import { registerUser } from '@/apis/userApi';
import { useRouter } from 'next/navigation';

export default function RegisterSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      await registerUser(email, name, password);
      setSuccessOpen(true);
      setTimeout(() => {
        router.push('/auth');
      }, 1500); // Delay to show the Snackbar
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack spacing={2}>
        <RegisterForm 
          email={email}
          name={name}
          password={password}
          onEmailChange={(val) => {
            setEmail(val);
            setError("");
          }}
          onNameChange={(val) => {
            setName(val);
            setError("");
          }}
          onPasswordChange={(val) => {
            setPassword(val);
            setError("");
          }}
        />
        <SubmitButton 
          label="Register" 
          onClick={handleSubmit} 
          loading={loading}  
          color="primary"
          variant="contained" 
        />
        <ErrorMessage message={error} />
        <RedirectText href="/auth" linkText="Login Here" />
      </Stack>

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }} onClose={() => setSuccessOpen(false)}>
          Registration successful!
        </Alert>
      </Snackbar>
    </>
  );
}
