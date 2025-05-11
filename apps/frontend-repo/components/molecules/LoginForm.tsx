import InputField from "../atoms/InputField";
import InputPassword from "../atoms/InputPassword";

interface Props {
  email: string;
  password: string;
  onEmailChange: (val: string) => void;
  onPasswordChange: (val: string) => void;
}

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}: Props) {
  return (
    <>
      <InputField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="Enter Your Email"
      />
      <InputPassword
        label="Password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Enter Your Password"
      />
    </>
  );
}
