'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@repo/shared/user';
import { RootState } from '@/store/store';
import { setModal } from '@/store/actions';
import { fetchUserData, deleteUserData } from '@/apis/userApi';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import HomeTableRow from '../molecules/HomeTableRow';
import HomeTableHead from '../molecules/HomeTableHead';
import HomeAdd from '../molecules/HomeAdd';
import HomeEdit from '../molecules/HomeEdit';
import HomeUserCard from '../molecules/HomeUserCard';

export default function HomeTable() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [rows, setRows] = useState<User[]>([]);  
  const isOpen = useSelector((state: RootState) => state.modal);
  const token = useSelector((state: RootState) => state.auth.token);

  const fetchData = async (token: string) => {
    try {
      const response = await fetchUserData(token);
      if (!response) {
        return;
      }

      setRows(response);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    try {
      await deleteUserData(token, id);
      alert('Success to delete');
      fetchData(token);
    } catch (e) {
      alert('Failed to delete ' + e);
    }
  };

  const handleAdd = () => {
    dispatch(
      setModal({
        openAdd: true,
        openEdit: false,
        data: '',
      })
    );
  };

  const handleEdit = (id: string) => {
    dispatch(
      setModal({
        openAdd: false,
        openEdit: true,
        data: id,
      })
    );
  };

  useEffect(() => {
    if (!token) return;
    fetchData(token);
  }, [token, isOpen.modalEdit, isOpen.modalAdd]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>

      {isMobile ? (
        <Box display="flex" flexDirection="column" gap={2}>
          {rows.map((user) => (
            <HomeUserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="users table">
            <HomeTableHead />
            <TableBody>
              {rows.map((row) => (
                <HomeTableRow
                  key={row.id}
                  user={row}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {isOpen.modalAdd && <HomeAdd />}
      {isOpen.modalEdit && <HomeEdit />}
    </Box>
  );
}
