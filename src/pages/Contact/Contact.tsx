import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { CiCalendar } from "react-icons/ci";

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 5rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

const ContactAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 15rem;
  background-color: #def6fd83;
  padding: 20px;
  margin-left: 15px;
  margin-bottom: 15px;
`;

const BoxWeather = styled(ContactAbout)`
  background-color: inherit;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
`;

const PriceBox = styled(ContactAbout)`
  background-color: inherit;
  align-items: center;
  height: inherit;
`;

const PriceWrapper = styled.div`
  width: 100%;
`;

const PriceInput = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #e1e1e1;
  margin-bottom: 15px;
  align-items: center;
`;

const PriceDesc = styled.p`
  color: #838383;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const InputSlider = styled(Input)``;

const LinkStyled = styled(Link)`
  width: 100%;
  background-color: #1a263e;
  color: #fff;
  padding: 10px 15px;
  text-decoration: none;
`;

const Select = styled.select`
  width: 100%;
  border: none;
  padding: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const AboutTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #000;
`;

const AboutDesc = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;

const Image = styled.img`
  height: 500px;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  color: #2e6bee;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Desc = styled.p`
  font-weight: 500;
  margin-top: 8px;
  font-size: 34px;
`;

const DescSub = styled(Desc)`
  font-size: 30px;
  border-bottom: 1px solid #000;
`;

const SubText = styled(AboutDesc)`
  margin-top: 25px;
`;

export default function Contact() {
  const { idVilla } = useParams();
  const villas = useSelector((state: RootState) => state.villas);
  const card = villas.find((c) => c.id === idVilla);

  // const [cidade, setCidade] = useState("");
  // const [data, setData] = useState({});
  // const api = "b19c4ee03470a1c54f5d1a455517bc85";

  // const Weather = async () => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${card?.city}&appid=${api}&units=metric`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setData(data);
  // };

  return (
    <>
      <Navbar />
      <ContactBox>
        <Image src={card?.image} />
        <ContactWrapper>
          <div>
            <Title>{card?.island}</Title>
            <Desc>{card?.name}</Desc>
            <div>
              <DescSub>Villa Description</DescSub>
              <SubText>{card?.description}</SubText>
            </div>
          </div>
          <div>
            <ContactAbout>
              <AboutTitle>At-a-glance</AboutTitle>
              <AboutDesc>Capacity: {card?.capacity}</AboutDesc>
              <AboutDesc>Bedrooms: {card?.beds}</AboutDesc>
              <AboutDesc>Children Welcome: Yes</AboutDesc>
            </ContactAbout>
            <PriceBox>
              <PriceWrapper>
                <PriceDesc>Dates of your trip</PriceDesc>
                <PriceInput>
                  <Input placeholder="Dates"></Input>
                  <CiCalendar />
                </PriceInput>
              </PriceWrapper>
              <PriceWrapper>
                <PriceDesc>Number of guests</PriceDesc>
                <PriceInput>
                  <Select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </PriceInput>
              </PriceWrapper>
              <PriceWrapper>
                <PriceDesc>Price</PriceDesc>
                <InputSlider type="range" />
                <LinkStyled to="">Check Availability</LinkStyled>
              </PriceWrapper>
            </PriceBox>
            <BoxWeather>
              {/* <p>Nome da Cidade: {data.name}</p>
              <p>Temperatura: °C</p>
              <p>Temperatura Maxima: °C</p>
              <p>Temperatura Minima: °C</p>
              <p>Descricao: </p>
              <p>Descricao: </p> */}
            </BoxWeather>
          </div>
        </ContactWrapper>
      </ContactBox>
      <Footer />
    </>
  );
}
