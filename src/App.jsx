
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
          <Grid item xs={4}><div onClick={() => setCardOne(!cardOne)} className={cardOne ? "flip-box flip-box-clicked" : "flip-box"}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="https://comunidadblogger.net/wp-content/uploads/2021/06/aws-logo.jpg" alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <Item >
                    <p>"What's your favorite holiday?</p>
                  </Item>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}><div onClick={() => setCardTwo(!cardTwo)} className={cardTwo ? "flip-box flip-box-clicked" : "flip-box"}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="https://amazic.com/wp-content/uploads/2020/07/Overriding-variables-in-Terraform.jpg" alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <Item >
                    <p>"What's your favorite holiday?</p>
                  </Item>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}><div onClick={() => setCardThree(!cardThree)} className={cardThree ? "flip-box flip-box-clicked" : "flip-box"}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2016/11/jenkins-1.png" alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <Item >
                    <p>"What's your favorite holiday?</p>
                  </Item>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}><div onClick={() => setCardFour(!cardFour)} className={cardFour ? "flip-box flip-box-clicked" : "flip-box"}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="https://www.a10networks.com/wp-content/uploads/OnDemandWebinar-Kubernetes-KeyGraphic-@2x-768x422.png" alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <Item >
                    <p>"What's your favorite holiday?</p>
                  </Item>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}><div onClick={() => setCardFive(!cardFive)} className={cardFive ? "flip-box flip-box-clicked" : "flip-box"}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="https://i0.wp.com/derechodelared.com/wp-content/uploads/2021/03/azure-1.png" alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <Item >
                    <p>"What's your favorite holiday?</p>
                  </Item>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}><div onClick={() => setCardSix(!cardSix)} className={cardSix ? "flip-box flip-box-clicked" : "flip-box"}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="https://c4.wallpaperflare.com/wallpaper/396/50/367/linux-command-lines-unix-bash-grey-hd-wallpaper-thumb.jpg" alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <Item >
                    <p>"What's your favorite holiday?</p>
                  </Item>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <img className='spin' src='https://f6.ftipng.com/pngimgs/other/79505/png-clipart-Download-Spotlight-Clipart_thumbnail.png' />
          </Grid>
          <Grid item xs={8} >
            
          </Grid>
          <Grid item xs={2}>
            <img className='spin-reverse' src='https://f6.ftipng.com/pngimgs/other/79505/png-clipart-Download-Spotlight-Clipart_thumbnail.png' />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
