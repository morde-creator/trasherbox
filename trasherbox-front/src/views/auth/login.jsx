'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Box, Button, TextField, Stack, Typography, Paper } from '@mui/material';

export default function AuthLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ username, password });

    const res = await axios.post('http://localhost:8000/api/login/', {
      username: username.trim(),
      password: password.trim(),
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

      localStorage.setItem('access_token', res.data.access);
      router.push('/dashboard');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      alert('Usuario o contraseña inválidos');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f6f8',
      }}
    >
      <Paper elevation={3} sx={{ p: 5, width: '100%', maxWidth: 400 }}>
        <Stack spacing={3} component="form" onSubmit={handleSubmit}>
          <Box textAlign="center">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: 100, marginBottom: 20 }}
            />
            <Typography variant="h5">Iniciar Sesión</Typography>
          </Box>

          <TextField
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth>
            Iniciar sesión
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
