/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ReactComponent as Circle } from './img/circle.svg';
import { ReactComponent as GridIcon } from './img/firstIconSecFour.svg';
import { ReactComponent as Forbes } from './img/forbes.svg';
import { ReactComponent as Gartner } from './img/gartner.svg';
import { ReactComponent as ImgGoogle } from './img/googleImg.svg';
import ImagePeopleSectionOne from './img/ImagePeopleSectionOne.png';
import { ReactComponent as NavLogo } from './img/navLogo.svg';
import { ReactComponent as People } from './img/people.svg';
import { ReactComponent as PlayButton } from './img/playbutton.svg';
import { ReactComponent as LogoIcon } from './img/ProductOfTheDay.svg';
import { ReactComponent as RadioButton } from './img/radioButton.svg';
import { ReactComponent as Rocket } from './img/rocket.svg';
import { ReactComponent as MagGlas } from './img/secondIconSectionFour.svg';
import sectionOneImage from './img/sectionOneImage.png';
import { ReactComponent as TechCrunch } from './img/techCrunch.svg';
import { ReactComponent as VentureBeat } from './img/ventureBeat.svg';

// Original-Page: https://qatalog.com/?ref=landingfolio
const container = css`
  width: 90%;
  margin: 0 auto;
`;

// style nav bar
const navStyle = css`
  width: 100vmax;
  height: auto;
  position: fixed;
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
  display: flex;
  gap: 0.5rem;
  padding: 0.9rem;
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
  display: flex;
  padding: 0.8rem;
  gap: 0.5rem;
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
  background-color: ${hovered && `#000`};
`;

// style child-elements (icons inside div's)
const iconBgrColor = (bgrColor) => css`
  background-color: ${bgrColor};
`;

// style parent-elements

const divIconColorBlue = css`
  &:hover {
    background-color: rgb(25, 56, 213);
    p {
      color: #fff;
    }
  }
`;

const divAndParagraphIconColorHover = (color) => css`
  &:hover {
    background-color: ${color};
    color: #000;

    p {
      color: #000;
    }
  }
`;

const divColorHover = (divColor) => css`
  &:hover {
    background-color: ${divColor};

    p {
      color: #fff;
    }
  }
`;

const sectionFourArticle = css`
  display: flex;
  padding: 1.5rem;
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

function App() {
  const [hovered, setChange] = useState(false);
  const [hoverTwo, setChangeTwo] = useState(false);
  const [hoverThree, setChangeThree] = useState(false);
  const [hoverFour, setChangeFour] = useState(false);
  const [hoverFive, setChangeFive] = useState(false);
  const [hoverSix, setChangeSix] = useState(false);

  return (
    <div className="App" css={container}>
      {/* navigation bar */}
      <nav css={navStyle}>
        <NavLogo />
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
              <ImgGoogle style={{ width: '20px' }} />
              Sign up with Google
            </button>
            <button css={[buttonStyleGeneral, buttonStyleSectionTwo]}>
              <PlayButton />
              Play video
            </button>
          </div>
          <p css={paragraphBorderStyle}>Or sign up via email </p>
          <p style={{ fontSize: '.9rem', fontWeight: '300' }}>
            By signing up, you agree to our <span>Privacy Policy</span>
            and
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
            <div
              css={[
                divFlowerIcon,
                iconBgrColor('rgb(25, 56, 213)'),
                headingcolor(hovered),
              ]}
            >
              <GridIcon />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>See what is important</h3>
              <p>Gain visibility into al your people, work and tools</p>
            </div>
          </article>
          <article
            css={[
              sectionFourArticle,
              divAndParagraphIconColorHover('rgb(248, 120, 83)'),
            ]}
            onMouseEnter={() => setChangeTwo(true)}
            onMouseLeave={() => setChangeTwo(false)}
          >
            <div
              css={[
                divFlowerIcon,
                iconBgrColor('rgb(248, 120, 83)'),
                headingcolor(hoverTwo),
              ]}
            >
              <MagGlas />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Search across your tools</h3>
              <p>Find anything from files to messages to lines of code</p>
            </div>
          </article>
          <article
            css={[sectionFourArticle, divColorHover('rgb(142, 118, 220)')]}
            onMouseEnter={() => setChangeThree(true)}
            onMouseLeave={() => setChangeThree(false)}
          >
            <div
              css={[
                divFlowerIcon,
                iconBgrColor(`rgb(142, 118, 220)`),
                headingcolor(hoverThree),
              ]}
            >
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
          <article
            css={[
              sectionFourArticle,
              divAndParagraphIconColorHover('rgb(251, 178, 84)'),
            ]}
            onMouseEnter={() => setChangeFour(true)}
            onMouseLeave={() => setChangeFour(false)}
          >
            <div
              css={[
                divFlowerIcon,
                iconBgrColor('rgb(251, 178, 84)'),
                headingcolor(hoverFour),
              ]}
            >
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
          <article
            css={[sectionFourArticle, divColorHover('rgb(142, 118, 220)')]}
            onMouseEnter={() => setChangeFive(true)}
            onMouseLeave={() => setChangeFive(false)}
          >
            <div
              css={[
                divFlowerIcon,
                iconBgrColor('rgb(129, 38, 93)'),
                headingcolor(hoverFive),
              ]}
            >
              <Circle />
            </div>
            <div css={sectionFourPaddingOnDiv}>
              <h3>Automate processes</h3>
              <p>Workflows that are easy for anyone to use</p>
            </div>
          </article>
          <article
            css={[
              sectionFourArticle,
              divAndParagraphIconColorHover('rgb(28, 255, 228)'),
            ]}
            onMouseEnter={() => setChangeSix(true)}
            onMouseLeave={() => setChangeSix(false)}
          >
            <div
              css={[
                divFlowerIcon,
                iconBgrColor('rgb(28, 255, 228)'),
                headingcolor(hoverSix),
              ]}
            >
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
