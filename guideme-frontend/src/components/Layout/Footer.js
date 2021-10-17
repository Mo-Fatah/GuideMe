import { Container,Grid, Box, Link } from '@mui/material';

const  Footer = () => {
  return (
    <footer>
      <Box
        py={{ xs: 5, sm: 2 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box alignItems='center'>
                <Link href="https://github.com/Mo-Fatah/GuideMe" color="inherit" align='center'>
                  Source Code
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;