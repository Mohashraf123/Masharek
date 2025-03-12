import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" href="https://wa.me/1234567890">تواصل معنا</Button>  
    </Stack>
  );
}