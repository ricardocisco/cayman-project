import React, { useState } from "react";
import styled from "styled-components";
import { FaBed } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { resortsData } from "../../data/data";
import ResortCard, {
  CardBox,
  CardDesc,
  CardImage,
  CardTexts,
  CardTitle,
  CardWrapper,
} from "../../components/ResortCard/ResortCard";
import {
  BackDiv,
  BackLink,
  BackText,
  BackTitle,
  Card,
  CardBack,
  CardFront,
  Icon,
  ImageHeader,
  ResortsBox,
  ResortText,
  SearchInput,
  SearchIsland,
  SelectBox,
  SelectDiv,
  SelectOption,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { viewVilla, villasProps } from "../../redux/reducers/itens";
import {
  mudarBusca,
  mudarCapacidade,
  mudarResort,
} from "../../redux/reducers/busca";

export default function About() {
  const villas = useSelector((state: RootState) => state.villas);
  const dispatch = useDispatch();
  const changeBusca = useSelector((state: RootState) => state.busca.query);
  const changeResort = useSelector(
    (state: RootState) => state.busca.selectIsland
  );
  const changeCapacity = useSelector(
    (state: RootState) => state.busca.selectPeople
  );

  const handleDispatch = (item: villasProps) => {
    dispatch(viewVilla(item));
  };

  const handleSelectResort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(mudarResort(e.target.value));
  };

  const handleSelectCapacity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(mudarCapacidade(e.target.value));
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(mudarBusca(e.target.value));
  };

  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    new Array(villas.length).fill(false)
  );

  const handleFlip = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  const filteredList = villas.filter((item) => {
    const matchesResort = changeResort ? item.island === changeResort : true;
    const matchesCapacity = changeCapacity
      ? item.capacity === changeCapacity
      : true;
    const matchesQuery = item.name
      .toLowerCase()
      .includes(changeBusca.toLowerCase());
    return matchesResort && matchesQuery && matchesCapacity;
  });

  return (
    <>
      <Navbar />
      <ImageHeader>
        <SearchIsland>
          <SelectDiv>
            <Icon>
              <IoIosSearch />
            </Icon>
            <SearchInput
              type="text"
              value={changeBusca}
              onChange={handleQuery}
              placeholder="Search by villa name"
            />
          </SelectDiv>
          <SelectDiv>
            <Icon>
              <CiLocationOn />
            </Icon>
            <SelectBox
              value={changeResort}
              onChange={handleSelectResort}
              name="select"
            >
              <SelectOption value="">Island</SelectOption>
              <SelectOption value="Grand Cayman">Grand Cayman</SelectOption>
              <SelectOption value="Little Cayman">Little Cayman</SelectOption>
            </SelectBox>
          </SelectDiv>
          <SelectDiv>
            <Icon>
              <GoPerson />
            </Icon>
            <SelectBox
              value={changeCapacity}
              onChange={handleSelectCapacity}
              name="select"
            >
              <SelectOption value="">People</SelectOption>
              <SelectOption value="2">2</SelectOption>
              <SelectOption value="3">3</SelectOption>
              <SelectOption value="4">4</SelectOption>
              <SelectOption value="5">5</SelectOption>
            </SelectBox>
          </SelectDiv>
        </SearchIsland>
      </ImageHeader>
      <ResortsBox>
        <ResortText>
          <p>Browse our Luxury Villas ({filteredList.length} results)</p>
          <p>Just special offers</p>
        </ResortText>
        <CardWrapper>
          {filteredList.map((item, index) => (
            <CardBox key={index}>
              <Card
                flipped={flippedCards[index]}
                onClick={() => handleFlip(index)}
              >
                <CardFront>
                  <CardImage src={item.image} alt={item.name} />
                  <CardTitle>{item.island}</CardTitle>
                  <CardDesc>{item.name}</CardDesc>
                  <CardTexts>
                    <p>
                      <Icon>
                        <FaBed />
                      </Icon>
                      {item.beds}
                    </p>
                    <p>
                      <Icon>
                        <MdPeopleAlt />
                      </Icon>
                      {item.capacity}
                    </p>
                    <p>${item.price_per_night}/noite</p>
                  </CardTexts>
                </CardFront>
                <CardBack>
                  <BackDiv>
                    <BackTitle>Havy Any Questions?</BackTitle>
                    <BackText>
                      With our knowledge of all the properties we can recommend
                      the perfect villa for your vacation
                    </BackText>
                    <BackLink
                      to={`/villas/${item.id}`}
                      onClick={() => handleDispatch(item)}
                    >
                      Contact Us
                    </BackLink>
                  </BackDiv>
                </CardBack>
              </Card>
            </CardBox>
          ))}
        </CardWrapper>
      </ResortsBox>
      <Footer />
    </>
  );
}
