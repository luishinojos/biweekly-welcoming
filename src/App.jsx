
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
    name: "Josue",
    lastname: "Ruiz",
    photo: "assets/img/josue-ruiz.jpeg",
  },
  {
    name: "Ramon",
    lastname: "Esparza",
    photo: "assets/img/ramon-esparza.jpg",
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
                <p>Any destination that you want to go to on vacation?  🏖</p>
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
                <p>How well do you handle spicy food? 🌶</p>
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
                <p>What's your favorite fictional character? 👾</p>
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
                  <img className="github" src="https://banner2.cleanpng.com/20180824/xkx/kisspng-circleci-logo-continuous-integration-computer-icon-find-cloud-computing-companies-using-node-js-in-sf-5b80afa3cf4a45.0442739215351602278491.jpg" alt="CIRCLE CI" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>What code editor do you like the most? 🧑🏼‍💻</p>
              </div>
            </div>
          </div>
          <span>CIRCLECI</span>
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
                <p>Are you team Tabs or team Spaces? ⌨️</p>
              </div>
            </div>
          </div>
          <span>JENKINS</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardSeven(!cardSeven)} className={cardSeven ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img className="github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1664px-Ansible_logo.svg.png" alt="ANSIBLE" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>What's your favorite snack from the convinience store? 🍪</p>
              </div>
            </div>
          </div>
          <span>ANSIBLE</span>
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
                <p>What's the best meal that you can cook? 🧑‍🍳</p>
              </div>
            </div>
          </div>
          <span>K8S</span>
          <span>MAN</span>
        </div>
        <div className="small-box">
          <div onClick={() => setCardEight(!cardEight)} className={cardEight ? "flip-box flip-box-clicked" : "flip-box"}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <picture>
                  <img src="https://www.gstatic.com/devrel-devsite/prod/v2325d8c952b9b608081f2b039989eacb0148117feedf74c3efc58771dfb973db/cloud/images/social-icon-google-cloud-1200-630.png" alt="GCP" />
                </picture>
              </div>
              <div className="flip-box-back">
                <p>If you win the lottery, what would you do with all the money? 🤑</p>
              </div>
            </div>
          </div>
          <span>GCP</span>
          <span>MAN</span>
        </div>
        <div className="footer">
          <p>Hi there and welcome to the team! Don't be shy and please:<br />
            &nbsp;&nbsp;1.- Tell us about where are you from.<br />
            &nbsp;&nbsp;2.- What's one thing you like to do.<br />
            &nbsp;&nbsp;3.- Select a tool to unlock a secret question!</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
