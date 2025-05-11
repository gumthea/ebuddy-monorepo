'use client';

import { useState } from "react";
import { Stack } from "@mui/material";
import LoginForm from "../molecules/LoginForm";
import SubmitButton from "../atoms/SubmitButton";
import ErrorMessage from "../atoms/ErrorMessage";
import RedirectText from "../atoms/RedirectText";
import { loginUser } from "@/apis/userApi";

export default function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Email and Password must be filled");
        return;
      }

      setLoading(true);
      const { data, message } = await loginUser(email, password);

      document.cookie = "isLogin=true; path=/";
      document.cookie = `token=${data.token}; path=/`;
      document.cookie = `user=${data.name}; path=/`;

      window.location.href = "/";
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={2}>
      <LoginForm
        email={email}
        password={password}
        onEmailChange={(val) => {
          setEmail(val);
          setError("");
        }}
        onPasswordChange={(val) => {
          setPassword(val);
          setError("");
        }}
      />
      <SubmitButton 
        label="Login" 
        onClick={handleLogin} 
        loading={loading}  
        color="primary"
        variant="contained" 
      />
      <ErrorMessage message={error} />
      <RedirectText href="/auth/register" linkText="Register Here" />
    </Stack>
  );
}
