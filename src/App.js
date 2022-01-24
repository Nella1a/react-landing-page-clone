/** @jsxImportSource @emotion/react */
import './App.css';
import { ClassNames, css, Global, jsx } from '@emotion/react';
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

//**** section one
const sectionOneStyle = css`
display: flex;
height: 31.25rem;


  position: relative;
  top: 9rem;
  margin:auto;

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
  }

    p{
      font-weight: 400px;
      text-align: left;
      font-size: 1.5rem;
      color: #bfbfbf;
      margin-top: 0px
    }

    span {
      color: #96A5F3
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

/* const imageSectionOne = css`
  width: 6rem;
`; */

const divButtonStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 0.8rem;
`;

const ButtonStyleSectionOne = css`
  width: 13.6rem;
  &:hover {
    background-color: rgb(20, 44, 167);
    border: 1px solid rgb(20, 44, 167);
  }
`;

const ButtonStyleSectionTwo = css`
  width: 9rem;
  background-color: transparent;
  border: 1px solid #fff;
  &:hover {
    background-color: rgb(62, 62, 62);
    border: 1px solid rgb(62, 62, 62);
  }
`;

// section two
const sectionTwoStyle = css`
  width: 105%;
  margin: 3.5rem auto;
`;

//Section Three

const sectionThree_Container = css`
  display: flex;
  justify-content: space-between;
`;

//Section Four
const sectionFour_Container = css`
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

const DivFlowerIcon = css`
  position: relative;
  border: 1px solid green;
  background-color: rgb(25, 56, 213);
  border-radius: 10px;
  height: 48px;
  width: 48px;
  padding: 10px;
`;

const sectionFourArticle = css`
  display: flex;
  padding: 3rem;

  border-radius: 10px;
  border: 1px solid yellow;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: rgb(148, 148, 148);
  }

  &:hover {
    background-color: rgb(248, 120, 83);
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

function FlowerPower() {
  return <img width="inherit" src={require('./img/all.svg')} alt="Logo" />;
}

function App() {
  return (
    <div className="App">
      <nav css={navStyle}>
        <ul>
          <li>
            <LogoQatalog />
          </li>
          <li css={specificLiStyle}>Produts</li>
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
            <button css={[navButton, ButtonStyleSectionOne]}>
              Sign up with Google
            </button>
            <button css={[navButton, ButtonStyleSectionTwo]}>Play video</button>
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
      <section css={sectionThree_Container}>
        <LogoIcon />
        <VentureBeat />
        <TechCrunch />
        <Gartner />
        <Forbes />
      </section>
      {/* Section Four */}
      <section css={sectionFour_Container}>
        <h1>It is time for a new way of work</h1>
        <div css={flexSectionFourContainer}>
          <article css={sectionFourArticle}>
            <div css={DivFlowerIcon}>
              <FlowerPower />
            </div>
            <div>
              <h3 css={sectionFourh3}>See what is important</h3>
              <p css={sectionFourParagraph}>
                Gain visibility into al your people, work and tools
              </p>
            </div>
          </article>
          <article css={sectionFourArticle}>
            <div css={DivFlowerIcon}>
              <FlowerPower />
            </div>
            <div>
              <h3 css={sectionFourh3}>See what is important</h3>
              <p css={sectionFourParagraph}>
                Gain visibility into al your people, work and tools
              </p>
            </div>
          </article>
          <article css={sectionFourArticle}>
            <div css={DivFlowerIcon}>
              <FlowerPower />
            </div>
            <div>
              <h3 css={sectionFourh3}>See what is important</h3>
              <p css={sectionFourParagraph}>
                Gain visibility into al your people, work and tools
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
