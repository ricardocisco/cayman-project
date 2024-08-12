import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  ImageHeader,
  SearchInput,
  SearchIsland,
  SelectDiv,
} from "../Villas/style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const LinkButton = styled.button`
  background-color: #1a263e;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border: none;
`;

const ButtonOpt = styled.button`
  border: none;
  padding: 10px 15px;
  background: none;
  cursor: pointer;
  border-bottom: 5px solid ${(props) => (props.active ? "#1a263e" : "#d3d3d3")};
`;

export default function Schedules() {
  const [activeMenu, setActive] = useState("outbound");

  const renderContent = () => {
    switch (activeMenu) {
      case "outbound":
        return (
          <div>
            <div>
              <h1>ANEGADA to TORTOLA</h1>
              <div>
                <p>Anegada Express</p>
                <p>Setting point - Trellis Bay</p>
              </div>
              <div>
                <tbody>
                  <tr>
                    <th scope="row">Mon</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                  <tr>
                    <th scope="row">Tue</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                  <tr>
                    <th scope="row">Wed</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                  <tr>
                    <th scope="row">Thu</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                  <tr>
                    <th scope="row">Fri</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                  <tr>
                    <th scope="row">Sat</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                  <tr>
                    <th scope="row">Sun</th>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                    <td>09:15</td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
        );
      case "inboud":
        return (
          <div>
            <h1>Inboud</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <ImageHeader>
        <SearchIsland>
          <SelectDiv>
            <SearchInput type="text" placeholder="Search by villa name" />
          </SelectDiv>
          <SelectDiv>
            <SearchInput type="text" placeholder="Search by villa name" />
          </SelectDiv>
        </SearchIsland>
        <LinkButton>Search</LinkButton>
      </ImageHeader>
      <div>
        <h1>Ferry Schedules</h1>
        <p>
          Comprehensive inrormation on GC and USVI ferry schedules including
          ferry map and faqs
        </p>
        <div>
          <nav>
            <ButtonOpt
              active={activeMenu === "outbound"}
              onClick={() => setActive("outbound")}
            >
              Outbound
            </ButtonOpt>
            <ButtonOpt
              active={activeMenu === "inboud"}
              onClick={() => setActive("inboud")}
            >
              Inbound
            </ButtonOpt>
          </nav>
          <div>{renderContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
