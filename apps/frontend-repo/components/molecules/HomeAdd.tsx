'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '@/store/actions';
import { RootState } from '@/store/store';
import { createUserData } from '@/apis/userApi';
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

export default function HomeAdd() {
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
    if (!token) return;
    try {
      await createUserData(token, form);
      alert('User successfully added');
      handleClose();
    } catch (e) {
      alert('Failed to save data: ' + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="add-user-dialog-title"
      open={isOpen.modalAdd}
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="add-user-dialog-title">
        Add User
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
          label="Save" 
          onClick={handleSave} 
          loading={loading}  
          color="primary"
          variant="contained" 
        />
      </DialogActions>
    </BootstrapDialog>
  );
}
