import styled from "styled-components";
import imgBg from "../../assets/bgazul.jpg";
import { Link } from "react-router-dom";

interface CardProps {
  flipped: boolean;
}

export const ImageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

export const SearchIsland = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  padding: 5px;
  &:focus {
    outline: none;
    border: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  font-size: 26px;
  padding: 5px;
  color: #707070;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const SelectDiv = styled.div`
  display: flex;
  margin: 0 20px 0 0;
  align-items: center;
  border-left: 1px solid #707070;
  padding: 5px 8px;
  @media (max-width: 768px) {
    border-left: inherit;
    width: 100%;
  }
`;

export const SelectBox = styled.select`
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectOption = styled.option`
  border: none;
  padding: 10px;
`;

export const ResortsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

export const ResortText = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Card = styled.div<CardProps>`
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.6s;
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardFace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const CardFront = styled(CardFace)``;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`;

export const BackDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BackTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 1.4rem;
`;
export const BackText = styled.p`
  font-size: 14px;
  margin-bottom: 1.4rem;
`;
export const BackLink = styled(Link)`
  background-color: #e1e1e1;
  text-decoration: none;
  color: #000;
  padding: 10px 15px;
`;
