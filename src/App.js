/** @jsxImportSource @emotion/react */
import './App.css';
import { ClassNames, css, Global, jsx } from '@emotion/react';
import { AiFillAppstore } from 'react-icons/fa';
import { ReactComponent as FlowerIcon } from './img/all.svg';
// import Forbes from './img/Forbes.png';
// import Gartner from './img/Gartner.png';
import ImagePeopleSectionOne from './img/ImagePeopleSectionOne.png';
import { ReactComponent as LogoIcon } from './img/ProductOfTheDay.svg';
import sectionOneImage from './img/sectionOneImage.png';

// import TechCrunch from './img/TechCrunch.png';
// import VentureBeat from './img/VentureBeat.png';

// Page: https://qatalog.com/?ref=landingfolio

//style nav bar & ul, li, button
const navStyle = css`
  padding: 0 2rem;
  width: 87.5rem;
  margin: 0 auto;
  height: auto;
  position: fixed;
  /* border: 1px solid green; */
  z-index: 2;
  background-color: rgb(41, 41, 41);

  ul {
    width: inherit;
    display: flex;
    list-style: none;
    gap: 50px;
    color: #fff;
    justify-content: space-between;
    padding: 0.5rem;
    position: relative;
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

const liButtonContainer = css`
  position: relative;
`;

const navButton = css`
  background-color: rgb(25, 56, 213);
  width: 5.6rem;
  height: 3.1rem;
  color: #fff;
  border: 0;
  border-radius: 17px;
  position: relative;
  top: -0.5rem;
  font-size: 17px;
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
    font-size: 1.5rem;
    color: #bfbfbf;
    margin-top: 0px;
  }

  span {
    color: #96a5f3;
  }
`;

const sectionOneArticle = css`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const paragraphBorderStyle = css`
  border-bottom: 1px dashed #ffff;
  color: #ffff;
  width: 11.1rem;
  font-size: 17px;
`;

const divButtonStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 0.8rem;
`;

const buttonStyleSectionOne = css`
  width: 13.6rem;
  &:hover {
    background-color: rgb(20, 44, 167);
    border: 1px solid rgb(20, 44, 167);
  }
`;

const buttonStyleSectionTwo = css`
  width: 9rem;
  background-color: transparent;
  border: 1px solid #fff;
`;

// section two
const sectionTwoStyle = css`
  width: 105%;
  margin: 3.5rem auto;
`;

// Section Three

const sectionThreeContainer = css`
  display: flex;
  justify-content: space-between;
`;

// Section Four
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
  position: relative;
  /* border: 1px solid green; */
  /* background-color: rgb(25, 56, 213); */
  border-radius: 10px;
  height: 48px;
  width: 48px;
  padding: 10px;
`;

const iconBackgroundBlue = css`
  background-color: rgb(25, 56, 213);
`;

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

// Hover-Colors
const divIconColorBlue = css`
  &:hover {
    background-color: rgb(25, 56, 213);
  }
`;

const divIconColorOrange = css`
  &:hover {
    background-color: rgb(248, 120, 83);
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
  }
`;

const sectionFourArticle = css`
  display: flex;
  padding: 3rem;
  border-radius: 15px;
  /* border: 1px solid yellow; */

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: rgb(148, 148, 148);
  }
`;

const flexSectionFourContainer = css`
  display: flex;
`;

const sectionFourh3 = css`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem; ;
`;

const sectionFourParagraph = css`
  font-size: 1rem;
  width: 80%;
  margin: 0 auto;
`;

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

function Header() {
  // Import result is the URL of your image
  return (
    <img
      css={sectionTwoStyle}
      width="inherit"
      src={sectionOneImage}
      alt="Logo"
    />
  );
}

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

// function FlowerPower() {
//   return <img width="inherit" src={require('./img/all.svg')} alt="Logo" />;
// }

function App() {
  return (
    <div className="App">
      <nav css={navStyle}>
        <ul>
          <li>
            <LogoQatalog />
          </li>
          <li css={specificLiStyle}>Products</li>
          <li>Plans</li>
          <li>Request demo</li>
          <li>Login</li>
          <li css={liButtonContainer}>
            <button css={navButton}>Sign Up</button>
          </li>
        </ul>
      </nav>

      <section css={sectionOneStyle}>
        <article>
          <h1>No more</h1>
          <h2>
            Why are we <span>doing this</span>
          </h2>
          <p>Try the work hub for modern teams</p>
          <div css={divButtonStyle}>
            <button css={[navButton, buttonStyleSectionOne]}>
              Sign up with Google
            </button>
            <button css={[navButton, buttonStyleSectionTwo]}>Play video</button>
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
            marginLeft: '90px',
          }}
        ></article>
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
      {/* Section Four */}
      <section css={sectionFourContainer}>
        <h1>It is time for a new way of work</h1>
        <div css={flexSectionFourContainer}>
          <article css={[sectionFourArticle, divIconColorBlue]}>
            <div css={[divFlowerIcon, iconBackgroundBlue]}>
              <FlowerIcon />
            </div>
            <div>
              <h3 css={sectionFourh3}>See what is important</h3>
              <p css={sectionFourParagraph}>
                Gain visibility into al your people, work and tools
              </p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorOrange]}>
            <div css={[divFlowerIcon, iconBackgroundOrange]}>
              <FlowerIcon />
            </div>
            <div>
              <h3 css={sectionFourh3}>Search across your tools</h3>
              <p css={sectionFourParagraph}>
                Find anything from files to messages to lines of code
              </p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorPurple]}>
            <div css={[divFlowerIcon, iconBackgroundPurple]}>
              <FlowerIcon />
            </div>
            <div>
              <h3 css={sectionFourh3}>Centralize projects</h3>
              <p css={sectionFourParagraph}>
                Statuses, activity, people, anf files - in a single view
              </p>
            </div>
          </article>
        </div>
        {/* ----- second row ----- */}
        <div css={flexSectionFourContainer}>
          <article css={[sectionFourArticle, divIconColorYellow]}>
            <div css={[divFlowerIcon, iconBackgroundYellow]}>
              <FlowerIcon />
            </div>
            <div>
              <h3 css={sectionFourh3}>Align on goals</h3>
              <p css={sectionFourParagraph}>
                Work that's connected to the big picture
              </p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorPink]}>
            <div css={[divFlowerIcon, iconBackgroundPink]}>
              <FlowerIcon />
            </div>
            <div>
              <h3 css={sectionFourh3}>Automate processes</h3>
              <p css={sectionFourParagraph}>
                Workflows that are easy for anyone to use
              </p>
            </div>
          </article>
          <article css={[sectionFourArticle, divIconColorLightBlue]}>
            <div css={[divFlowerIcon, iconBackgroundLightBlue]}>
              <FlowerIcon />
            </div>
            <div>
              <h3 css={sectionFourh3}>Build belonging</h3>
              <p css={sectionFourParagraph}>
                A directory that connects to people's work
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
