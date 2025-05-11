import InputField from '../atoms/InputField';

interface Props {
  email: string;
  name: string;
  password: string;
  onEmailChange: (val: string) => void;
  onNameChange: (val: string) => void;
  onPasswordChange: (val: string) => void;
}

export default function RegisterForm({
  email,
  name,
  password,
  onEmailChange,
  onNameChange,
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
      <InputField
        label="name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Enter Your Name"
      />
      <InputField
        label="Password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Enter Your Password"
      />
    </>
  );
}
