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
  const [resortList, setResortList] = useState(resortsData);

  return (
    <CardWrapper>
      {resortList.slice(0, 6).map((item, index) => (
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

export default HomeResort;
