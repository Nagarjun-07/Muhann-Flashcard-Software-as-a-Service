'use client';
import React from 'react';
import Image from 'next/image';
import getStripe from '@/utils/get-stripe';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    });
    const checkoutSessionJson = await checkoutSession.json();
    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });
    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <Container maxWidth="100vw" sx={{ overflowX: 'hidden', p: 0 }}>
      <Head>
        <title>Muhann Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
      <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Muhann Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" gutterBottom>
            The easiest way to make flashcards from your text
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </motion.div>
      </Box>

      <Box sx={{ my: 6 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: '#FF8E53',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '15px',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Easy text input
                  </Typography>
                  <Typography>
                    Simply input your text and let our software do the rest.
                    Creating flashcards has never been easier.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: '#FE6B8B',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '15px',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Smart Flashcards
                  </Typography>
                  <Typography>
                    Our AI intelligently breaks down your text into concise flashcards.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: '#FF8E53',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '15px',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Accessible anywhere and anytime
                  </Typography>
                  <Typography>
                    Access your flashcards from any device, at any time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" gutterBottom>
            Pricing
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  border: '2px solid #FE6B8B',
                  borderRadius: 5,
                  backgroundColor: '#FF8E53',
                  color: '#fff',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <Typography variant="h5">Basic Muhann</Typography>
                <Typography variant="h6">$0/month</Typography>
                <Typography>
                  Access to basic Muhann flashcard features and limited storage for free.
                </Typography>
                
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                  Already activated 
                </Button>
                
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  border: '2px solid #FE6B8B',
                  borderRadius: 5,
                  backgroundColor: '#FE6B8B',
                  color: '#fff',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <Typography variant="h5">Pro Muhann</Typography>
                <Typography variant="h6">$5/month</Typography>
                <Typography>
                  Access to Pro Muhann unlimited flashcard features and storage.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2 }}
                  onClick={handleSubmit}
                >
                  Pro Plan
                </Button>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
}
