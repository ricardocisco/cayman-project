import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import imgBg from "../../assets/bgazul.jpg";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import ResortCard, {
  CardBox,
  CardDesc,
  CardImage,
  CardTexts,
  CardTitle,
  CardWrapper,
} from "../../components/ResortCard/ResortCard";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { resortsData } from "../../data/data";
import { FaBed } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

const ImageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

const SearchIsland = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const SearchInput = styled.input`
  border: none;
  padding: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;

const Icon = styled.i`
  display: flex;
  align-items: center;
  font-size: 26px;
  padding: 5px;
  color: #707070;
`;

const SelectDiv = styled.div`
  display: flex;
  margin: 0 10px 0 10px;
  align-items: center;
  border-left: 1px solid #707070;
  padding: 5px 8px;
`;

const SelectBox = styled.select`
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

const SelectOption = styled.option`
  border: none;
  padding: 10px;
`;

const ResortsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const ResortText = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default function About() {
  const [selectedIsland, setSelectedisland] = useState<string>("");
  const [selectedPeople, setSelectedPeople] = useState<string>("");
  const [querySearch, setQuerySearch] = useState<string>("");
  const [resortList, setResortList] = useState(resortsData);

  const handleSelectedIsland = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedisland(event.target.value);
  };

  const handleSelectedPeople = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPeople(event.target.value);
  };

  const handleQuerySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event.target.value);
  };

  const filteredList = resortList.filter((item) => {
    return (
      (selectedIsland === "" || item.island === selectedIsland) &&
      (selectedPeople === "" || item.capacity === selectedPeople) &&
      (querySearch === "" ||
        item.name.toLowerCase().includes(querySearch.toLowerCase()))
    );
  });

  return (
    <>
      <Navbar />
      <ImageHeader>
        <SearchIsland>
          <Icon>
            <IoIosSearch />
          </Icon>
          <SearchInput
            type="text"
            value={querySearch}
            onChange={handleQuerySearch}
            placeholder="Search by villa name"
          ></SearchInput>
          <SelectDiv>
            <Icon>
              <CiLocationOn />
            </Icon>
            <SelectBox
              value={selectedIsland}
              onChange={handleSelectedIsland}
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
              value={selectedPeople}
              onChange={handleSelectedPeople}
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
            </CardBox>
          ))}
        </CardWrapper>
      </ResortsBox>
      <Footer />
    </>
  );
}
