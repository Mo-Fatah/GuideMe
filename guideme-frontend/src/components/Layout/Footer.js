import { Container, Box, Link } from '@mui/material';

const  Footer = () => {
  return (
    <footer>
      <Box
        py={{ xs: 1, sm: 1 }}
        bgcolor="#E5EAF2"
        color="#2173FF"
        bottom={0}
        position='fixed'
        width='100%'
      >
        <Container align='center' maxWidth="lg" margin-top='calc(5% + 60px)' position='fixed' bottom= {0}>
                <Link href="https://github.com/Mo-Fatah/GuideMe" color="inherit" underline='hover'>
                  Github 
                </Link>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;