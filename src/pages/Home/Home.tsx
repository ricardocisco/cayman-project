import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import imgBg from "../../assets/bgazul.jpg";
import { Link } from "react-router-dom";
import SliderFeedback from "../../components/SliderFeedback/SliderFeedback";
import {
  CardBox,
  CardDesc,
  CardImage,
  CardTitle,
  CardWrapper,
} from "../../components/ResortCard/ResortCard";
import Footer from "../../components/Footer/Footer";
import HomeResort from "../../components/ResortCard/HomeResort";

const BoxMain = styled.div`
  height: 100%;
`;

const ImageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  & h2 {
    margin-top: 22px;
    color: #fff;
    font-weight: 400;
    font-size: 50px;
  }
  & button {
    margin-top: 35px;
    color: #fff;
    background-color: rgba(225, 225, 255, 0.45);
    border: solid 1px #fff;
    padding: 10px 30px;
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const TextDiv = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px;
`;

const TextTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const TextDesc = styled.p`
  margin-top: 60px;
  font-weight: 600;
  color: #797878;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  margin-top: 20px;
`;

const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #def6fd83;
  height: 500px;
  padding: 60px;
  & h1 {
    font-size: 34px;
    font-weight: 500;
  }
  & p {
    color: #797878;
  }
  @media (max-width: 769px) {
    height: inherit;
  }
`;

const WhyBox = styled.div`
  display: flex;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const WhyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid #8097d694;
  height: 250px;
  width: 250px;
  margin: 15px;
  padding: 15px;
  & h1 {
    font-size: 18px;
    text-align: center;
  }
  & p {
    font-size: 14px;
    text-align: center;
  }
`;

const IslandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    align-items: center;
  }
`;

const Islands = styled.img`
  width: 600px;
  height: 300px;
  margin-bottom: 30px;
`;

const IslandCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 2px solid #8097d694;
  height: 150px;
  width: 360px;
  padding: 18px;
  left: 450px;
  margin-top: 70px;
  & h1 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  & p {
    font-size: 15px;
    color: #797878;
  }
`;

const IslandBox = styled.div`
  display: flex;
  align-items: center;
`;

const IslandT = styled.h1`
  font-size: 38px;
  margin: 60px 0 20px 0;
  font-weight: 500;
`;

const IslandP = styled.p`
  font-size: 15px;
  margin: 50px;
  text-align: center;
`;

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 550px;
  background-color: #def6fd83;
  & h1 {
    font-size: 48px;
    font-weight: 400;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    height: inherit;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1020px;
`;

const NewsText = styled.h1`
  font-size: 42px;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const NewsBox = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkButton = styled(Link)`
  padding: 20px;
  background-color: #1a263e;
  color: #fff;
  text-decoration: none;
  margin: 20px 0 30px 0;
`;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #def6fd83;
  height: 300px;
  padding: 60px;
`;

const NewsletterH = styled.h1`
  font-size: 38px;
  font-weight: 500;
  text-align: center;
`;

const NewsletterP = styled.p`
  font-size: 14px;
  color: #797878;
  margin-top: 22px;
`;

const NewsletterBox = styled.div`
  margin-top: 22px;
`;
const NewsletterInput = styled.input`
  padding: 10px 20px;
  border: none;
`;
const NewsletterButton = styled.button`
  padding: 10px 20px;
  background-color: #1a263e;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <BoxMain>
        <ImageHeader>
          <ImageBox>
            <p>LUXURY VILLAS IN THE</p>
            <h2>CAYMAN ISLANDS</h2>
            <button>Discover Villas</button>
          </ImageBox>
        </ImageHeader>
        <TextBox>
          <TextDiv>
            <TextDesc>
              Discover the natural beauty of the Cayman islands dotted like
              jewels in the Caribbean Sea. Comprising of over 3 islands and part
              of a volcanic archipeligo, there are four main inhabited islands
              with each having a unique ambience.
            </TextDesc>
            <TextTitle>The villa collection</TextTitle>
            <TextDesc>
              Specialising in the Cayman Islans, we will match you percet villa.
              Wheter it be a romantic cottage for just the two of you or a large
              beachfront, family home just steps from the white sans and
              turquoise waters.
            </TextDesc>
            <LinkStyled to="/">View all villas → </LinkStyled>
          </TextDiv>
          <HomeResort />
          <LinkButton to="/">View all villas →</LinkButton>
        </TextBox>
        <WhyContainer>
          <h1>Why choose us?</h1>
          <p>
            We are avalible 7 days a week to assist and answer any questions you
            may have to ensure your vacationb is unforgettable
          </p>
          <WhyBox>
            <WhyCard>
              <h1>Knowledge and expertise</h1>
              <p>
                We know the islands and we personally view every vila we
                represent
              </p>
            </WhyCard>
            <WhyCard>
              <h1>Customer service</h1>
              <p>
                We are here 7 days a week to answer all your questions about the
                villas on the island
              </p>
            </WhyCard>
            <WhyCard>
              <h1>Finishing touches</h1>
              <p>
                We can assist with your rental vehicle, private chef, and so
                much more
              </p>
            </WhyCard>
          </WhyBox>
        </WhyContainer>
        <IslandContainer>
          <div>
            <IslandT>Choosing an island</IslandT>
            <IslandP>
              These exquisite islands are known as Nature's Litlle Secrets. With
              our expertise and knowledfe of the Cayman Islands, lets us help
              you unravel those secretes creating memories to last a lifetime.
            </IslandP>
          </div>
        </IslandContainer>
        <FeedbackContainer>
          <h1>Whats our clients say</h1>
          <SliderFeedback />
        </FeedbackContainer>
        <NewsWrapper>
          <NewsContainer>
            <NewsText>Latest from our news</NewsText>
            <NewsBox>
              <CardBox>
                <CardImage src="https://images.unsplash.com/photo-1501698335706-90b736210a61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <CardTitle>The Islands</CardTitle>
                <CardDesc>Private Charter Flights</CardDesc>
                <CardDesc>
                  if you and your party wish to take a private charter to
                  Canyman, flights can be arranged from Barbados
                </CardDesc>
              </CardBox>
              <CardBox>
                <CardImage src="https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <CardTitle>Restaurant Review</CardTitle>
                <CardDesc>Summer Beach Party</CardDesc>
                <CardDesc>
                  Parties on Cayman are legendary and our midsummer beach party
                  promisses to be no exception
                </CardDesc>
              </CardBox>
              <CardBox>
                <CardImage src="https://images.unsplash.com/photo-1526166729864-ddc57657d48f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <CardTitle>Activities</CardTitle>
                <CardDesc>A Golfer'S Paradise</CardDesc>
                <CardDesc>
                  It is the Caribbean's and has been named in the Top 10 of'Best
                  Golf Courses' in the world
                </CardDesc>
              </CardBox>
            </NewsBox>
            <LinkButton to="/">View all news</LinkButton>
          </NewsContainer>
        </NewsWrapper>
        <NewsletterContainer>
          <NewsletterH>Subscribe to our newsletter</NewsletterH>
          <NewsletterP>
            We will only send you updates and CI news we thinkk you might love
            to her about. We will never pass on your details.
          </NewsletterP>
          <NewsletterBox>
            <NewsletterInput placeholder="seu email" />
            <NewsletterButton>Join</NewsletterButton>
          </NewsletterBox>
        </NewsletterContainer>
      </BoxMain>
      <Footer />
    </>
  );
}
