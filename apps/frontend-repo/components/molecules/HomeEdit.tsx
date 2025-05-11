'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '@/store/actions';
import { RootState } from '@/store/store';
import { fetchUserData, updateUserData } from '@/apis/userApi';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import UserForm from '../molecules/UserForm';
import SubmitButton from '../atoms/SubmitButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function HomeEdit() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal);
  const token = useSelector((state: RootState) => state.auth.token);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    totalAverageWeightRatings: 0,
    numberOfRents: 0,
  });

  useEffect(() => {
    if (!isOpen.modalEdit || !isOpen.data || !token) return;

    const loadData = async () => {
      try {
        const data = await fetchUserData(token, isOpen.data);
        setForm({
          name: data.name,
          email: data.email,
          password: '***',
          totalAverageWeightRatings: data.totalAverageWeightRatings,
          numberOfRents: data.numberOfRents,
        });
      } catch (e) {
        console.error("Failed to fetch user data", e);
      }
    };

    loadData();
  }, [isOpen, token]);

  const handleClose = () => {
    dispatch(setModal({ openAdd: false, openEdit: false, data: '' }));
    clearForm();
  };

  const clearForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      totalAverageWeightRatings: 0,
      numberOfRents: 0,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    if (!isOpen.data || !token) return;

    try {
      const { name, email, totalAverageWeightRatings, numberOfRents } = form;

      await updateUserData(token, isOpen.data, {
        name,
        email,
        totalAverageWeightRatings, 
        numberOfRents
      });
      alert('User successfully updated');
      handleClose();
    } catch (e) {
      alert('Failed to update data: ' + e);
    } finally {
      setLoading(false);
    }
  };


  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="edit-user-dialog-title"
      open={isOpen.modalEdit}
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="edit-user-dialog-title">
        Edit User
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseRounded />
      </IconButton>
      <DialogContent dividers>
        <UserForm
          {...form}
          isEdit={true}
          onChange={{
            name: (v) => setForm((f) => ({ ...f, name: v })),
            email: (v) => setForm((f) => ({ ...f, email: v })),
            password: (v) => setForm((f) => ({ ...f, password: v })),
            totalAverageWeightRatings: (v) => setForm((f) => ({ ...f, totalAverageWeightRatings: v })),
            numberOfRents: (v) => setForm((f) => ({ ...f, numberOfRents: v })),
          }}
        />
      </DialogContent>
      <DialogActions>
        <SubmitButton 
          label="Update" 
          onClick={handleSave} 
          loading={loading}  
          color="primary"
          variant="contained" 
        />
      </DialogActions>
    </BootstrapDialog>
  );
}
