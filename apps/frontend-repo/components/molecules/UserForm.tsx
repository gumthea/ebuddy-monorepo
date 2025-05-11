'use client';

import { Stack } from '@mui/material';
import InputField from '../atoms/InputField';

interface UserFormProps {
  name: string;
  email: string;
  password: string;
  totalAverageWeightRatings: number;
  numberOfRents: number;
  onChange: {
    name: (value: string) => void;
    email: (value: string) => void;
    password: (value: string) => void;
    totalAverageWeightRatings: (value: number) => void;
    numberOfRents: (value: number) => void;
  };
  isEdit?: boolean;
}

export default function UserForm({
  name,
  email,
  password,
  totalAverageWeightRatings,
  numberOfRents,
  onChange,
  isEdit = false,
}: UserFormProps) {
  return (
    <Stack spacing={2}>
      <InputField label="Name" value={name} onChange={(e) => onChange.name(e.target.value)} />
      <InputField 
        label="Email" 
        value={email} 
        onChange={(e) => onChange.email(e.target.value)}
      />
      <InputField 
        label="Password" 
        type="password" 
        value={password} 
        onChange={(e) => onChange.password(e.target.value)} 
        disabled={isEdit}
      />
      <InputField
        label="Average Weight Rating"
        type="number"
        value={totalAverageWeightRatings}
        onChange={(e) => onChange.totalAverageWeightRatings(parseFloat(e.target.value))}
      />
      <InputField
        label="Number Of Rent"
        type="number"
        value={numberOfRents}
        onChange={(e) => onChange.numberOfRents(parseInt(e.target.value))}
      />
    </Stack>
  );
}
