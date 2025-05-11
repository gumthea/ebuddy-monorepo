'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '@/store/actions';
import { getCookie } from '@/utils/cookie';
import HomeTable from '../organisms/HomeTable';
import { Container, Typography } from '@mui/material';

export default function HomeTemplate() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
     const token = getCookie('token');
    const cookieUser = getCookie('user');

    if (token) {
      dispatch(setToken(token));
    }
    
    if (cookieUser) {
      setName(decodeURIComponent(cookieUser));
    }
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h6">
        Hello, {name ? ` ${name}` : ''}
      </Typography>

      <HomeTable />
    </Container>
  );
}