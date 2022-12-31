import { Box, Container, Paper } from "@mui/material";
import Head from "next/head";
import { Copyright } from "../components/Copyright";
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