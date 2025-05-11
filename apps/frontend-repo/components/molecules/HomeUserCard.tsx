'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { User } from '@repo/shared/user';
import ActionButtons from '../atoms/ActionButtons';

interface HomeUserCardProps {
  user: User;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function HomeUserCard({ user, onEdit, onDelete }: HomeUserCardProps) {
  return (
    <Card key={user.id} variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{user.name}</Typography>
          <Box>
            <ActionButtons
              onEdit={() => onEdit(user.id)}
              onDelete={() => onDelete(user.id)}
            />
          </Box>
        </Box>
        <Typography variant="body2">Email: {user.email}</Typography>
        <Typography variant="body2">Avg. Rating: {user.totalAverageWeightRatings}</Typography>
        <Typography variant="body2">Rent Count: {user.numberOfRents}</Typography>
        <Typography variant="body2">Recently Active: {user.recentlyActive}</Typography>
      </CardContent>
    </Card>
  );
}
