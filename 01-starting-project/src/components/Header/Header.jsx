import stylizedAtomImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function generateRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[generateRandomInt(2)];
    return (
      <header>
      {/* if we import the image and use it like this, it will include an automatically generated path
      that will also work once the react app is deployed to a server*/}
        <img src={stylizedAtomImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }