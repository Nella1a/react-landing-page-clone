/** @jsxImportSource @emotion/react */
import './App.css';
import { ClassNames, css, Global, jsx } from '@emotion/react';
import ImagePeopleSectionOne from './img/ImagePeopleSectionOne.png';
import sectionOneImage from './img/sectionOneImage.png';

// Page: https://qatalog.com/?ref=landingfolio

//style nav bar & ul, li, button
const navStyle = css`
  padding: 0 2rem;
  width: 100vw;
  height: auto;
  position: fixed;
  border: 1px solid green;
  z-index: 2;
  background-color: rgb(41, 41, 41);

  ul {
    display: flex;
    list-style: none;
    gap: 50px;
    color: #fff;
    justify-content: space-between;
    padding: 0.5rem;
    position: relative;
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
`;

//style section one
const sectionOneStyle = css`
display: flex;
  width: 80vw;
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

    span {
      &::before {

          content: ' ';
          display: block;
        }
      }
    }
  }

  article {
    width: 80%;
    padding: 0.5rem;

    p{
      font-weight: 400px;
      text-align: left;
    }
`;

const div = css`
  width: 110%;
`;

const imageSectionOne = css`
  width: 6rem;
`;

const divButtonStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 0.8rem;
`;

const ButtonStyleSectionOne = css`
  width: 13.6rem;
`;

const ButtonStyleSectionTwo = css`
  width: 9rem;
`;

function Hello() {
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
  return <img css={div} width="inherit" src={sectionOneImage} alt="Logo" />;
}

function App() {
  return (
    <div className="App">
      <nav css={navStyle}>
        <ul>
          <li>Qatalog</li>
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
            <button css={[navButton, ButtonStyleSectionOne]}></button>
            <button css={[navButton, ButtonStyleSectionTwo]}></button>
          </div>
        </article>
        <article css={div}>
          <Header css={div}></Header>
        </article>
      </section>
      <section css={div}>
        <Hello css={imageSectionOne} />
      </section>
    </div>
  );
}

export default App;
