import { Link } from "react-router-dom";
import styled from "styled-components";
import { CiMail, CiSearch } from "react-icons/ci";

const BoxNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1400px;
  padding: 20px 60px;
  margin: 0 auto;
  & div {
    display: flex;
    align-items: center;
  }
`;

const Icon = styled.i`
  padding: 0 5px;
  align-content: center;
  cursor: pointer;
  font-size: 22px;
`;

const LinkStyled = styled(Link)`
  margin: 25px;
  text-decoration: none;
  color: #000;
`;

export default function Navbar() {
  return (
    <BoxNavbar>
      <h1>Grand Cayman</h1>
      <ul>
        <LinkStyled to="/">Villas</LinkStyled>
        <LinkStyled to="/">Specials</LinkStyled>
        <LinkStyled to="/">Yachts</LinkStyled>
        <LinkStyled to="/">Information</LinkStyled>
        <LinkStyled to="/">Ferry Schedules</LinkStyled>
        <LinkStyled to="/">About</LinkStyled>
      </ul>
      <div>
        <Icon>
          <CiSearch />
        </Icon>
        <Icon>
          <CiMail />
        </Icon>
      </div>
    </BoxNavbar>
  );
}
