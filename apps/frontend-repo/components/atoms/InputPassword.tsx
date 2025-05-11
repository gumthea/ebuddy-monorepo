import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputPasswordProps {
  value: string;
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({ value, label, placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="password-input">{label}</InputLabel>
      <OutlinedInput
        id="password-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={togglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default InputPassword;
