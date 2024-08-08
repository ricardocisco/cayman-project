import React, { useState } from "react";
import ResortCard, {
  CardBox,
  CardDesc,
  CardImage,
  CardTexts,
  CardTitle,
  CardWrapper,
  Icon,
} from "./ResortCard";
import { resortsData } from "../../data/data";
import { FaBed } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

interface CardProps {
  image: string;
  island: string;
  capacity: number;
  beds: number;
  name: string;
  price_per_night: number;
}

interface ResortListProps {
  resorts: CardProps[];
}

const HomeResort: React.FC<ResortListProps> = () => {
  const villas = useSelector((state: RootState) => state.villas);

  return (
    <CardWrapper>
      {villas.slice(0, 6).map((item) => (
        <CardBox key={item.id}>
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
  );
};

export default HomeResort;
