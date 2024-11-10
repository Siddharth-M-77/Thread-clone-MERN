import React from 'react';
import { Stack, Typography, Button, Box, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ code = '404', message = 'Page Not Found' }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ fontSize: '4rem', color: 'primary.main' }}>
          <ErrorOutlineIcon fontSize="inherit" />
        </Box>
        
        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'primary.main' }}>
          {code}
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          {message}
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoBack}
          sx={{
            borderRadius: '999px',
            textTransform: 'none',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
          }}
        >
          Go Back to Home
        </Button>
      </Stack>
    </Container>
  );
};

export default ErrorPage;
