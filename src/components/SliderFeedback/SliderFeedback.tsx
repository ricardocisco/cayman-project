import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbacks } from "../../data/feedback";
import styled from "styled-components";

interface FeedbackProps {
  user: string;
  message: string;
}

const BoxProjetos = styled.div`
  width: 350px;
  padding: 25px;
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
`;

const SlideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 250px;
  height: 150px;
  padding: 25px;
  border-radius: 10px;
`;

const TextUser = styled.p`
  font-size: 22px;
`;

const TextLocation = styled.p`
  font-size: 14px;
  margin-top: 6px;
`;

const TextMessage = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export default function SliderFeedback() {
  const [feedback, setFeedback] = useState<FeedbackProps[]>(feedbacks);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BoxProjetos>
      <Slider {...settings}>
        {feedback.map((feed, index) => (
          <SlideItem key={index}>
            <TextUser>{feed.user}</TextUser>
            <TextLocation>{feed.location}</TextLocation>
            <TextMessage>{feed.message}</TextMessage>
          </SlideItem>
        ))}
      </Slider>
    </BoxProjetos>
  );
}
