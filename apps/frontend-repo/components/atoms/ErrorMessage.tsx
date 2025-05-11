import { Typography } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Typography color="error" sx={{ mt: 2 }}>
    {message}
  </Typography>
);

export default ErrorMessage;
