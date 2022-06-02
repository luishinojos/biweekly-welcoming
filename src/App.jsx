
import './index.css';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const people = [
  {
    name: "Jeffry Hernández",
    nationality: "Colombia",
    photo: "assets/img/jeffery.jpeg",
    position: "SRE III"
  },
  {
    name: "Damian Zermeño",
    nationality: "Guadalajara",
    photo: "assets/img/damian.jpeg",
    position: "SRE III"
  },
  {
    name: "Alberto Piñon Formoso",
    nationality: "Mexico",
    photo: "assets/img/alberto.jpeg",
    position: "SRE II"
  },
  {
    name: "Jorge Madrigal",
    nationality: "Colombia",
    photo: "assets/img/jorge.jpeg",
    position: "SRE III"
  },
  {
    name: "Ricardo Núñez",
    nationality: "Colombia",
    photo: "assets/img/ricardo.jpeg",
    position: "SRE II"
  }
]

export default function RowAndColumnSpacing() {

  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [cardFour, setCardFour] = useState(false);
  const [cardFive, setCardFive] = useState(false);
  const [cardSix, setCardSix] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <div className="header"><p>===== SRE JOURNEY START =====</p></div>
        <div className="small-box">
          <picture>
            <img src="https://www.c3ntro.com/hubfs/logo-aws-blanco%20(1).png" alt="aws" />
          </picture>
          <span>AWS</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="docker" />
          </picture>
          <span>DOCKER</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="https://blogs.vmware.com/cloudprovider/files/2019/04/og-image-8b3e4f7d-blog-aspect-ratio.png" alt="terraform" />
          </picture>
          <span>TERRAFORM</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img className="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GITHUB" />
          </picture>
          <span>GITHUB</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="src/favicon.svg" alt="member" />
          </picture>
          <span>???</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="https://coralogix.com/wp-content/uploads/2020/12/jenkins.png" alt="JENKINS" />
          </picture>
          <span>JENKINS</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" alt="K8S" />
          </picture>
          <span>K8S</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="https://seeklogo.com/images/M/microsoft-azure-logo-85055C44BE-seeklogo.com.png" alt="AZURE" />
          </picture>
          <span>AZURE</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <picture>
            <img src="https://seeklogo.com/images/G/gitlab-logo-757620E430-seeklogo.com.png" alt="GITLAB" />
          </picture>
          <span>GITLAB</span>
          <span>MAN</span>
        </div>
        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
