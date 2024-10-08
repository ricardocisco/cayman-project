import React, { useState } from "react";
import { resortsData } from "../../data/data";
import { FaBed } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import styled from "styled-components";

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

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  max-width: 1200px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 8px;
`;

export const CardTexts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & p {
    display: flex;
    align-items: center;
    margin-right: 12px;
    margin-top: 8px;
    color: #797878;
  }
`;

export const CardImage = styled.img`
  height: 160px;
  width: 300px;
`;

export const CardTitle = styled.h1`
  font-size: 14px;
  color: #2e6bee;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const CardDesc = styled.p`
  font-weight: 600;
  margin-top: 8px;
  color: #797878;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  color: #797878;
  font-size: 22px;
  margin-right: 5px;
`;

const ResortCard: React.FC<ResortListProps> = () => {
  const [resortList, setResortList] = useState(resortsData);

  return (
    <CardWrapper>
      {resortList.map((item, index) => (
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
  );
};

export default ResortCard;
