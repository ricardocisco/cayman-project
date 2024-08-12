import { Link } from "react-router-dom";
import styled from "styled-components";
import { CiMail, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const BoxNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1200px;
  margin: 0 auto;
  padding: 10px;
  & div {
    display: flex;
    align-items: center;
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: start;
  }
`;

interface UlProps {
  active: boolean;
}

const UlStyled = styled.ul<UlProps>`
  display: flex;
  @media (max-width: 768px) {
    display: ${({ active }) => (active ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Icon = styled.i`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 20px;
    cursor: pointer;
    z-index: 9999;
  }
`;

const LinkStyled = styled(Link)`
  margin: 25px;
  text-decoration: none;
  color: #000;
  @media (min-width: 769px) and (max-width: 1300px) {
    margin: 15px;
    font-size: 16 px;
  }
  @media (max-width: 768px) {
    color: #fff;
  }
`;

const Title = styled(Link)`
  font-size: 26px;
  text-decoration: none;
  color: #000;
  font-weight: 800;
  @media (min-width: 769px) and (max-width: 1300px) {
    font-size: 20px;
  }
`;

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <BoxNavbar>
      <Title to="/">Grand Cayman</Title>
      <Icon
        onClick={() => {
          setActive(!active);
        }}
      >
        {!active ? <FaBars /> : <AiOutlineClose />}
      </Icon>
      <UlStyled active={active}>
        <LinkStyled to="/villas">Villas</LinkStyled>
        <LinkStyled to="/">Specials</LinkStyled>
        <LinkStyled to="/">Yachts</LinkStyled>
        <LinkStyled to="/">Information</LinkStyled>
        <LinkStyled to="/schedules">Ferry Schedules</LinkStyled>
        <LinkStyled to="/">About</LinkStyled>
      </UlStyled>
    </BoxNavbar>
  );
}
