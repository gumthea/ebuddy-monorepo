'use client';

import { TableHead, TableRow, TableCell } from '@mui/material';

export default function HomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Action</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Average Weight Ratings</TableCell>
        <TableCell>Number Of Rents</TableCell>
        <TableCell>Recently Active</TableCell>
      </TableRow>
    </TableHead>
  );
}
