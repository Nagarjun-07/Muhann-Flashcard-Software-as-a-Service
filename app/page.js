import React from 'react';
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Container, AppBar, Toolbar, Typography, Button ,Box,Grid} from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title> Muhann Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow:1}}>
            Muhann Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">{' '}Login</Button>
            <Button color="inherit" href="/sign-up">{' '}Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{textAlign:'center',my:4,}}>
        <Typography variant="h2" gutterBottom>Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5" gutterBottom>
          {' '}
          The easiset way to make flashcard from your text
          </Typography>
          <Button variant="contained" color="primary" sx={{mt:2}}>Get Started</Button>
          </Box>
          <Box sx={{my:6}}>
          <Typography variant="h4" gutterBottom>
           Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Easy text input
              </Typography>
              <Typography>
                {' '}
                Simply input your text and let my software do the rest.
                Creating flashcards has never been easier.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Smart Flashcards
              </Typography>
              <Typography>
                {' '}
               Our AI intelligently breaks down your text into concise flashcards.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Accessible anywhere and anytime
              </Typography>
              <Typography>
                {' '}
                Access your flashcards from any device, at any time.
              </Typography>
            </Grid>
          </Grid>
          </Box>
          <Box sx={{my:6,textAlign:'center'}}>
            <Typography variant="h4" gutterBottom>
              Pricing
            </Typography>
            <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{p:3,border:'1px solid #ccc',borderColor:'grey.300',borderRadius:5,}}>
              <Typography variant="h5">
                Basic Muhann
              </Typography>
              <Typography variant="h6">
                $2/month
              </Typography>
              <Typography>
                {' '}
               Access to basic Muhann flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt:2}}>basic plan</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box sx={{p:3,border:'1px solid #ccc',borderColor:'grey.300',borderRadius:5,}}>
              <Typography variant="h5">
                Pro Muhann
              </Typography>
              <Typography variant="h6">
                $5/month
              </Typography>
              <Typography>
                {' '}
               Access to Pro Muhann unlimited flashcard features and storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt:2}}>Pro plan</Button>
              </Box></Grid>
          </Grid>
            </Box>
    </Container>
  );
}
