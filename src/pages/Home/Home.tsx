import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import imgBg from "../../assets/bgazul.jpg";
import { Link } from "react-router-dom";

const BoxMain = styled.div`
  height: 100%;
`;

const ImageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  & h2 {
    margin-top: 22px;
    color: #fff;
    font-weight: 400;
    font-size: 50px;
  }
  & button {
    margin-top: 35px;
    color: #fff;
    background-color: rgba(225, 225, 255, 0.45);
    border: solid 1px #fff;
    padding: 10px 30px;
  }
`;

const TextBox = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <BoxMain>
        <ImageHeader>
          <ImageBox>
            <p>LUXURY VILLAS IN THE</p>
            <h2>CAYMAN ISLANDS</h2>
            <button>Discover Villas</button>
          </ImageBox>
        </ImageHeader>
        <TextBox>
          <p>
            Discover the natural beauty of the Cayman islands dotted like jewels
            in the Caribbean Sea. Comprising of over 3 islands and part of a
            volcanic archipeligo, there are four main inhabited islands with
            each having a unique ambience.
          </p>
          <h1>The villa collection</h1>
          <p>
            Specialising in the Cayman Islans, we will match you percet villa.
            Wheter it be a romantic cottage for just the two of you or a large
            beachfront, family home just steps from the white sans and turquoise
            waters.
          </p>
          <Link to="/">View all villas → </Link>
        </TextBox>
      </BoxMain>
    </>
  );
}
