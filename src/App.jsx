
import './App.css';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function RowAndColumnSpacing() {

  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [cardFour, setCardFour] = useState(false);
  const [cardFive, setCardFive] = useState(false);
  const [cardSix, setCardSix] = useState(false);
  const [cardSeven, setCardSeven] = useState(false);
  const [cardEight, setCardEight] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Welcome to the SRE &amp; Cloud Ops team!
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Answer the two questions below and then select one mystery question! Anyone is welcome to give their reponses in the chat. 😬
                </Typography>
                <Typography >
                  🏠 Where are you from? | 🌟 Favorite hobbie?
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardOne(!cardOne)}>
              <p>{cardOne ? "Pineapple on pizza?" : "🦷"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardTwo(!cardTwo)}>
              <p>{cardTwo ? "What's your favorite musician/band?" : "🍎"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardThree(!cardThree)}>
              <p>{cardThree ? "Do you have a favorite sports team?" : "🏓"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardFour(!cardFour)}>
              <p>{cardFour ? "How do you drink your coffee?" : "💿"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardFive(!cardFive)}>
              <p>{cardFive ? "What's the last movie/anime/series that you saw?" : "🦁"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardSix(!cardSix)}>
              <p>{cardSix ? "What's the best meal that you can cook?" : "🔥"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardSeven(!cardSeven)}>
              <p>{cardSeven ? "You have to sing karaoke, what song do you pick?" : "🎃"}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item onClick={() => setCardEight(!cardEight)}>
              <p>{cardEight ? "What's your favorite holiday?" : "🍕"}</p>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <img className='spin' src='https://f6.ftipng.com/pngimgs/other/79505/png-clipart-Download-Spotlight-Clipart_thumbnail.png' />
          </Grid>
          <Grid item xs={8} >
            <div className='newcomers'>
              <p>Rafa Miranda | Fernando Gonzalez</p>
              <p>Oscar Castillo | Antonio Florez</p>
              <p>Saul Rubio | Edgar Talledos</p>
            </div>
          </Grid>
          <Grid item xs={2}>
            <img className='spin-reverse' src='https://f6.ftipng.com/pngimgs/other/79505/png-clipart-Download-Spotlight-Clipart_thumbnail.png' />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
