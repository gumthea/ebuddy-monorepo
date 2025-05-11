'use client';

import { TableRow, TableCell } from '@mui/material';
import { User } from '@repo/shared/user';
import ActionButtons from '../atoms/ActionButtons';

interface HomeTableRowProps {
  user: User;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function HomeTableRow({ user, onEdit, onDelete }: HomeTableRowProps) {
  return (
    <TableRow key={user.id}>
      <TableCell>
        <ActionButtons onEdit={() => onEdit(user.id)} onDelete={() => onDelete(user.id)} />
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.totalAverageWeightRatings}</TableCell>
      <TableCell>{user.numberOfRents}</TableCell>
      <TableCell>{user.recentlyActive}</TableCell>
    </TableRow>
  );
}
