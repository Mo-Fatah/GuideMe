import { Stack, Button } from '@mui/material';
import React from 'react';

const ColorButton = ({
  component, path, text,
}) => (
  <Stack direction="row" spacing={2} paddingBottom={4}>
    <Button variant="contained" color="success" component={component} to={path}>
      {text}
    </Button>
  </Stack>
);

export default ColorButton;
