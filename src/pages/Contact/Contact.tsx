import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { CiCalendar } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import {
  BsCloudsFill,
  BsCloudRainFill,
  BsCloudRainHeavyFill,
  BsFillCloudLightningRainFill,
  BsFillCloudSnowFill,
  BsFillCloudHaze2Fill,
  BsCloudHazeFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { GiTornado } from "react-icons/gi";

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
  width: 20rem;
  height: 14rem;
  background-color: #def6fd83;
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const BoxWeather = styled(ContactAbout)`
  flex-direction: row;
  background-color: inherit;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
`;

const TempBox = styled.div`
  display: flex;
  align-items: center;
`;

const IconBox = styled.i`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const DescBox = styled.p`
  font-size: 34px;
`;

const DescCity = styled(DescBox)`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
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

  const [cidade, setCidade] = useState("");
  const [data, setData] = useState(null);
  const api = "b19c4ee03470a1c54f5d1a455517bc85";

  const Weather = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    if (card) {
      setCidade(card.city);
    }
  }, [card]);

  useEffect(() => {
    if (cidade) {
      Weather(cidade);
    }
  }, [cidade]);

  const getWeatherDescription = (main) => {
    switch (main) {
      case "Clear":
        return <CiSun />;
      case "Clouds":
        return <BsCloudsFill />;
      case "Rain":
        return <BsCloudRainHeavyFill />;
      case "Drizzle":
        return <BsCloudRainFill />;
      case "Thunderstorm":
        return <BsFillCloudLightningRainFill />;
      case "Snow":
        return <BsFillCloudSnowFill />;
      case "Mist":
        return <BsFillCloudHaze2Fill />;
      case "Smoke":
        return <BsCloudHazeFill />;
      case "Haze":
        return <BsCloudHazeFill />;
      case "Dust":
        return "Poeira";
      case "Fog":
        return <BsCloudFog2Fill />;
      case "Sand":
        return "Areia";
      case "Ash":
        return "Cinzas";
      case "Squall":
        return "Rajada";
      case "Tornado":
        return <GiTornado />;
      default:
        return main;
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const sunrise = data ? formatTime(data.sys.sunrise) : "";
  const sunset = data ? formatTime(data.sys.sunset) : "";
  const dt = data ? formatTime(data.dt) : "";

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
            {data && (
              <BoxWeather>
                <div>
                  <TempBox>
                    <IconBox>
                      {getWeatherDescription(data.weather[0].main)}
                    </IconBox>
                    <DescBox>{data.main.temp.toFixed(0)}°C</DescBox>
                  </TempBox>
                  <TempBox>
                    <IconBox>
                      <MdLocationPin />
                    </IconBox>
                    <DescCity>{data.name}</DescCity>
                  </TempBox>
                </div>
                <div>
                  <DescCity>Time: {dt}</DescCity>
                  <DescCity>Sunrise: {sunrise}</DescCity>
                  <DescCity>Sunset: {sunset}</DescCity>
                </div>
              </BoxWeather>
            )}
          </div>
        </ContactWrapper>
      </ContactBox>
      <Footer />
    </>
  );
}
