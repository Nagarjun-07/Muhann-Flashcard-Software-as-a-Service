import React from 'react'
import { AppBar, Box, Container, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { SignIn } from '@clerk/nextjs'; 

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Muhann Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up" passHref> {/* Correct the link path */}
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }} // Optional: Adds full-height centering
      >
        <Typography variant="h4" gutterBottom>
          Sign in 
        </Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
