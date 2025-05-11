import { Button as MuiButton, CircularProgress, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label?: string;
}

const SubmitButton = ({ loading = false, label, children, ...rest }: Props) => {
  return (
    <MuiButton disabled={loading || rest.disabled} {...rest}>
      {loading ? <CircularProgress size={20} color="inherit" /> : label || children}
    </MuiButton>
  );
};

export default SubmitButton;
