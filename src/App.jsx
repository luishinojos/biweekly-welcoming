
import "./index.css";
import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const people = [
  {
    name: "???",
    lastname: "MAN",
    photo: "https://cdn-images-1.medium.com/max/1200/1*-Y2UTMmyQiNa2BVsgPNmqA.png"
  },
  {
    name: "Carlos",
    lastname: "Pérez",
    photo: "assets/img/carlos-perez.jpeg",
  },
  {
    name: "Raúl",
    lastname: "Murcia",
    photo: "assets/img/raul-murcia.jpeg",
  },
]

export default function RowAndColumnSpacing() {

  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [cardFour, setCardFour] = useState(false);
  const [cardFive, setCardFive] = useState(false);
  const [cardSix, setCardSix] = useState(false);
  const [cardSeven, setCardSeven] = useState(false);
  const [cardEight, setCardEight] = useState(false);
  const [cardMember, setCardMember] = useState(0);

  const updateMemberCard = (cardMember) => {
    let temp = cardMember;
    if (cardMember < (people.length - 1)) {
      setCardMember(temp + 1);
    } else {
      setCardMember(0);
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <div className="header"><p>==== SRE ICEBREAK START ====</p></div>
        <div className="small-box">
          <div onClick={() => setCardOne(!cardOne)} className={cardOne ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://www.c3ntro.com/hubfs/logo-aws-blanco%20(1).png" alt="aws" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>The best destination that you"ve went on vacations? 🏖</p>
              </div>
            </div>
          </div>
          <span>AWS</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardTwo(!cardTwo)} className={cardTwo ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="docker" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>What"s your favorite sport to watch or practice? ⛹️</p>
              </div>
            </div>
          </div>
          <span>DOCKER</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardThree(!cardThree)} className={cardThree ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://blogs.vmware.com/cloudprovider/files/2019/04/og-image-8b3e4f7d-blog-aspect-ratio.png" alt="terraform" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>A movie or show you want to recommend? 🍿</p>
              </div>
            </div>
          </div>
          <span>TERRAFORM</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardFour(!cardFour)} className={cardFour ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img className="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GITHUB" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>What superpower would you like to have? 🦸</p>
              </div>
            </div>
          </div>
          <span>GITHUB</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture onClick={() => updateMemberCard(cardMember)}>
                  <img src={people[cardMember].photo} alt="member" />
                </picture>
              </div>
            </div>
          </div>
          <span>{people[cardMember].name}</span>
          <span>{people[cardMember].lastname}</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardFive(!cardFive)} className={cardFive ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://coralogix.com/wp-content/uploads/2020/12/jenkins.png" alt="JENKINS" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>Can you tell us the last thing that you have ordered online? 🛍</p>
              </div>
            </div>
          </div>
          <span>JENKINS</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardSix(!cardSix)} className={cardSix ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" alt="K8S" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>What"s the best meal that you can cook? 🧑‍🍳</p>
              </div>
            </div>
          </div>
          <span>K8S</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardSeven(!cardSeven)} className={cardSeven ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://seeklogo.com/images/M/microsoft-azure-logo-85055C44BE-seeklogo.com.png" alt="AZURE" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>What do you like buying from the grocery shop? 🍪</p>
              </div>
            </div>
          </div>
          <span>AZURE</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardEight(!cardEight)} className={cardEight ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://seeklogo.com/images/G/gitlab-logo-757620E430-seeklogo.com.png" alt="GITLAB" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>If you won a lottery, what would you do with all the money? 🤑</p>
              </div>
            </div>
          </div>
          <span>GITLAB</span>
          <span>MAN</span>
        </div>
        <div className="footer">
          <p>Hi there! Please tell us about where are you from and one of your hobbies. Then select a tool to unlock a secret question!</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
