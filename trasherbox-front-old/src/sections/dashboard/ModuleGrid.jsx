'use client';
import { Grid, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const modules = [
  { name: 'Clientes', path: '/admin/clientes', icon: '👥' },
  { name: 'Cotizaciones', path: '/admin/cotizaciones', icon: '📄' },
  { name: 'Productos', path: '/admin/productos', icon: '📦' },
  { name: 'Proveedores', path: '/admin/proveedores', icon: '🏢' },
  { name: 'Ventas', path: '/admin/ventas', icon: '💰' },
];

export default function ModuleGrid() {
  const router = useRouter();

  return (
    <Grid container spacing={3}>
      {modules.map((mod) => (
        <Grid item xs={6} md={3} key={mod.name}>
          <Paper
            elevation={3}
            onClick={() => router.push(mod.path)}
            sx={{
              cursor: 'pointer',
              p: 3,
              textAlign: 'center',
              '&:hover': { backgroundColor: 'primary.light', color: '#fff' },
            }}
          >
            <Typography variant="h3">{mod.icon}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {mod.name}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
