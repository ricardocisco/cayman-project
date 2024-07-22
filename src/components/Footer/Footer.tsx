import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #1a263e;
`;

const FooterBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterDiv = styled.div`
  & h1 {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 19px;
    }
  }
  & p {
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid #6d6d6d;
  padding: 10px;
  & p {
    color: #6d6d6d;
    font-size: 12px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterDiv>
          <h1>Grand Cayman</h1>
        </FooterDiv>
        <FooterDiv>
          <h1>Contact</h1>
          <p>Tel: TBA(US)</p>
          <p>Tel: 0125 674877(UK)</p>
          <p>info@grandcayman.com.br</p>
        </FooterDiv>
        <FooterDiv>
          <h1>Links</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </FooterDiv>
        <FooterDiv>
          <h1>Social</h1>
        </FooterDiv>
      </FooterBox>
      <FooterRight>
        <p>Copyright 2024-2019 GrandCaymanLtda</p>
        <p>Company number:0624577</p>
        <p>GrandCayman Ltda, 53 College Road, Ash, GU125DB</p>
      </FooterRight>
    </FooterContainer>
  );
}
