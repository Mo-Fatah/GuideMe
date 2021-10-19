import { Container, Box, Link } from '@mui/material';
import React from 'react';

const Footer = () => (
  <footer>
    <Box
      py={{ xs: 1, sm: 1 }}
      bgcolor="#EEEEEE"
      color="black"
      bottom={0}
      position="fixed"
      width="100%"
    >
      <Container align="center" maxWidth="lg" margin-top="calc(5% + 60px)" position="fixed" bottom={0}>
        <Link href="https://github.com/Mo-Fatah/GuideMe" color="inherit" underline="hover">
          Github
        </Link>
      </Container>
    </Box>
  </footer>
);

export default Footer;
