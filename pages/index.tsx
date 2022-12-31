import { Box, Container, Paper, Typography, Link as MuiLink } from "@mui/material";
import Head from "next/head";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Turingg</title>
        <meta name="description" content="Turingg Pty Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Container maxWidth="sm">
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Box sx={{ marginTop: 1}}>
              <Logo />
            </Box>
            <Paper
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 1,
              }}
              elevation={2}
            >
              <Copyright />
            </Paper>
          </Box>
        </Container>
      </main>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://turingg.com.au/">
        Turingg Pty Ltd
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

