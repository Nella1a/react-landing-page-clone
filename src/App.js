/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ReactComponent as Circle } from './img/circle.svg';
import { ReactComponent as GridLayout } from './img/grid-outline.svg';
import ImagePeopleSectionOne from './img/ImagePeopleSectionOne.png';
import { ReactComponent as Minimize } from './img/minimize.svg';
import { ReactComponent as People } from './img/people.svg';
import { ReactComponent as LogoIcon } from './img/ProductOfTheDay.svg';
import { ReactComponent as RadioButton } from './img/radioButton.svg';
import { ReactComponent as Rocket } from './img/rocket.svg';
import sectionOneImage from './img/sectionOneImage.png';

const container = css`
  width: 90%;
  margin: 0 auto;
`;

// style nav bar
const navStyle = css`
  /* padding: 0 2rem; */
  /* width: 87.5rem; */
  width: 100vmax;
  /* padding: 0 3rem; */
  /* margin: 0 auto; */
  height: auto;
  position: fixed;
  /* border: 1px solid green; */
  z-index: 2;
  background-color: rgba(41, 41, 41);
  padding: 1rem 5rem 1rem 0rem;
  display: flex;

  ul {
    width: inherit;
    display: flex;
    list-style: none;
    gap: 50px;
    color: #fff;
    justify-content: space-between;
    /* padding: 0.5rem; */
    /* position: relative; */
    margin-right: 2rem;
  }

  li {
    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
`;

const specificLiStyle = css`
  margin-left: auto;
`;

const buttonStyleGeneral = css`
  background-color: rgb(25, 56, 213);
  height: 3.1rem;
  color: #fff;
  border-radius: 19px;
  font-size: 17px;
`;

const navButton = css`
  width: 8.6rem;
  border: 0;
  margin: 0.5rem 2rem;
  &:hover {
    background-color: rgb(20, 44, 167);
    border: 2px solid rgb(20, 44, 167);
  }
`;

// section one
const sectionOneStyle = css`
  display: flex;
  height: 31.25rem;
  position: relative;
  top: 9rem;
  margin: auto;

  h1 {
    color: rgb(251, 178, 84);
    font-size: 2.5rem;
    text-align: left;
    font-weight: 400;
  }

  h2 {
    color: #fff;
    font-size: 3rem;
    border-left: 2px solid #fff;
    font-weight: 400;
    text-align: left;
    padding-left: 1rem;
    margin: 2.5rem 0rem;

    span {
      &::before {
        content: ' ';
        display: block;
      }
    }
  }

  p {
    font-weight: 400px;
    text-align: left;
    color: #bfbfbf;
  }

  span {
    color: #96a5f3;
  }
`;

const paragraphBorderStyleOne = css`
  margin-top: 0px;
  font-size: 1.5rem;
`;

const paragraphBorderStyle = css`
  border-bottom: 1px dashed #ffff;
  width: 11.1rem;
  font-size: 1rem;
`;

const divButtonStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 0.8rem;
`;

const buttonStyleSectionOne = css`
  border: none;
  width: 13.6rem;
  margin: 0;
  &:hover {
    background-color: rgb(20, 44, 167);
    border: 2px solid rgb(20, 44, 167);
  }
`;

const buttonStyleSectionTwo = css`
  width: 9rem;
  background-color: transparent;
  border: 1px solid #fff;
  margin: 0;
  &:hover {
    background-color: grey;
    border: none;
  }
`;

// section two (pic of three people)
const sectionTwoStyle = css`
  margin: 3.2rem auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

// Section Three (5 brands Product of the Day, Venture Beat etc  )

const sectionThreeContainer = css`
  display: flex;
  justify-content: space-between;
`;

// Section Four (It's time for a new way of work )
const sectionFourContainer = css`
  display: flex;
  flex-direction: column;
  padding-top: 9rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 6rem;
    text-align: center;
  }
`;

const divFlowerIcon = css`
  border-radius: 10px;
  height: 48px;
  width: 48px;
  padding: 10px;
  display: flex;
  flex-direction: center;
  align-items: center;
`;

const headingcolor = (hovered) => css`
  background-color: ${hovered ? '#000' : `rgb(25, 56, 213)`};
`;

// style child-elements (icons inside div's)
const iconBackgroundOrange = css`
  background-color: rgb(248, 120, 83);
`;

const iconBackgroundPurple = css`
  background-color: rgb(142, 118, 220);
`;

const iconBackgroundYellow = css`
  background-color: rgb(251, 178, 84);
`;

const iconBackgroundPink = css`
  background-color: rgb(129, 38, 93);
`;

const iconBackgroundLightBlue = css`
  background-color: rgb(28, 255, 228);
`;

// style parent-elements
const divIconColorBlue = css`
  &:hover {
    background-color: rgb(25, 56, 213);
  }
`;

const divIconColorOrange = css`
  &:hover {
    background-color: rgb(248, 120, 83);
    color: #000;

    p {
      color: #000;
    }
  }
`;

const divIconColorPurple = css`
  &:hover {
    background-color: rgb(142, 118, 220);
  }
`;

const divIconColorYellow = css`
  &:hover {
    background-color: rgb(251, 178, 84);

    p {
      color: #000;
    }
  }
`;

const divIconColorPink = css`
  &:hover {
    background-color: rgb(129, 38, 93);
  }
`;

const divIconColorLightBlue = css`
  &:hover {
    background-color: rgb(28, 255, 228);

    p {
      color: #000;
    }
  }
`;

const sectionFourArticle = css`
  display: flex;
  padding: 3rem;
  border-radius: 15px;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: rgb(148, 148, 148);
  }
`;

const flexSectionFourContainer = css`
  display: flex;

  h3 {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    text-align: left;
  }

  p {
    font-size: 1rem;
    width: 80%;
    margin: 0;
    text-align: left;
  }
`;

const sectionFourPaddingOnDiv = css`
  padding-left: 2rem;
`;

// style img
function LogoQatalog() {
  return (
    <img width="inherit" src={require('./img/logoQataog.png')} alt="Logo" />
  );
}

function ImgOfThrePeople() {
  return (
    <img
      style={{
        height: '25rem',
        width: 'auto',
        position: 'relative',
        zIndex: '1',
      }}
      src={ImagePeopleSectionOne}
      alt="logo"
    />
  );
}
// try to use a component
function VentureBeat() {
  return (
    <img width="inherit" src={require('./img/VentureBeat.png')} alt="Logo" />
  );
}

function TechCrunch() {
  return (
    <img width="inherit" src={require('./img/TechCrunch.png')} alt="Logo" />
  );
}

function Gartner() {
  return <img width="inherit" src={require('./img/Gartner.png')} alt="Logo" />;
}

function Forbes() {
  return <img width="inherit" src={require('./img/Forbes.png')} alt="Logo" />;
}

function App() {
  const [hovered, setChange] = useState(false);

  return (
    <div className="App" css={container}>
      <nav css={navStyle}>
        <LogoQatalog />
        <ul>
          <li css={specificLiStyle}>Products</li>
          <li>Plans</li>
          <li>Request demo</li>
          <li>Login</li>
        </ul>
        <button css={[navButton, buttonStyleGeneral]}>Sign Up</button>
      </nav>
      {/* first section */}
      <section css={sectionOneStyle}>
        <article>
          <h1>No more</h1>
          <h2>
            Why are we <span>doing this</span>
          </h2>
          <p css={paragraphBorderStyleOne}>Try the work hub for modern teams</p>
          <div css={divButtonStyle}>
            <button css={[buttonStyleGeneral, buttonStyleSectionOne]}>
              Sign up with Google
            </button>
            <button css={[buttonStyleGeneral, buttonStyleSectionTwo]}>
              Play video
            </button>
          </div>
          <p css={paragraphBorderStyle}>Or sign up via email </p>
          <p style={{ fontSize: '.9rem', fontWeight: '300' }}>
            By signing up, you agree to our <span>Privacy Policy</span> and
            <span> Terms of Service.</span>
          </p>
        </article>
        <article
          style={{
            backgroundImage: `url(${sectionOneImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minWidth: '800px',
            height: 'auto',
            marginLeft: '50px',
          }}
        />
      </section>
      {/* Section Two */}
      <section css={sectionTwoStyle}>
        <ImgOfThrePeople />
      </section>
      {/* Section Three */}
      <section css={sectionThreeContainer}>
        <LogoIcon />
        <VentureBeat />
        <TechCrunch />
        <Gartner />
        <Forbes />
      </section>
      {/* ----- Section Four: It is time for a new way of work ------  */}
      <section css={sectionFourContainer}>
        <h1>It is time for a new way of work</h1>
        <div css={flexSectionFourContainer}>
          <article
            css={[sectionFourArticle, divIconColorBlue]}
            onMouseEnter={() => setChange(true)}
            onMouseLeave={() => setChange(false)}
          >
            <div css={[divFlowerIcon, headingcolor(hovered)]}>
              <GridLayout
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>See what is important</h3>
              <p>Gain visibility into al your people, work and tools</p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorOrange]}>
            <div css={[divFlowerIcon, iconBackgroundOrange]}>
              <Minimize
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Search across your tools</h3>
              <p>Find anything from files to messages to lines of code</p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorPurple]}>
            <div css={[divFlowerIcon, iconBackgroundPurple]}>
              <Rocket
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Centralize projects</h3>
              <p>Statuses, activity, people, and files - in a single view</p>
            </div>
          </article>
        </div>
        {/* ----- second row ----- */}
        <div css={flexSectionFourContainer}>
          <article css={[sectionFourArticle, divIconColorYellow]}>
            <div css={[divFlowerIcon, iconBackgroundYellow]}>
              <RadioButton
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Align on goals</h3>
              <p>Work that's connected to the big picture</p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorPink]}>
            <div css={[divFlowerIcon, iconBackgroundPink]}>
              <Circle />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Automate processes</h3>
              <p>Workflows that are easy for anyone to use</p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorLightBlue]}>
            <div css={[divFlowerIcon, iconBackgroundLightBlue]}>
              <People />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Build belonging</h3>
              <p>A directory that connects to people's work</p>
            </div>
          </article>
        </div>
      </section>
    </div>
    // </div>
  );
}

export default App;
