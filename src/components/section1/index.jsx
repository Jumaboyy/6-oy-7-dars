import React from "react";
import styled from "styled-components";
import img1 from "../../../public/img1.svg";
import img2 from "../../../public/img2.svg";
import img3 from "../../../public/img3.svg";



const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 100px auto 0;
  display: flex;
  border-radius: 10px;

  @media (max-width: 930px) {
    max-width: 700px;
  }

  @media (max-width: 705px) {
    max-width: 500px;
    flex-direction: column;
  }
`;


const Card = styled.div`
  flex: 1;
  padding: 48px;
  background-color: ${(props) =>
    props.bg === "sedan"
      ? "#E28625"
      : props.bg === "suv"
      ? "#006971"
      : "#004140"};
  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 930px) {
    padding: 30px 18px;
  }

  @media (max-width: 705px) {
    padding: 25px 18px;
  }
`;


const CardImage = styled.img`
  width: 64px;
  height: auto;
  margin-bottom: 35px;
`;


const CardTitle = styled.h1`
  font-family: "Big Shoulders Display", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #f2f2f2;
  margin-bottom: 25px;

  @media (max-width: 930px) {
    font-size: 24px;
  }

  @media (max-width: 705px) {
    font-size: 18px;
  }
`;


const CardText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.9;

  @media (max-width: 705px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  margin-top: 83px;
  align-self: flex-start;
  padding: 11px 31.5px;
  border-radius: 25px;
  border: none;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  cursor: pointer;
  background-color: #fff;
  color: ${(props) =>
    props.bg === "sedan"
      ? "#E28625"
      : props.bg === "suv"
      ? "#006971"
      : "#004140"};
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
  }

  @media (max-width: 705px) {
    padding: 10px 20px;
    margin-top: ${(props) =>
      props.bg === "sedan"
        ? "60px"
        : props.bg === "suv"
        ? "60px"
        : "110px"};
  }
`;


export default function ThreeColumnCard() {
  return (
    <Container>
      <Card bg="sedan">
        <div>
          <CardImage src={img1} alt="Sedans" />
          <CardTitle>Sedans</CardTitle>
          <CardText>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </CardText>
        </div>
        <Button bg="sedan">Learn More</Button>
      </Card>

      <Card bg="suv">
        <div>
          <CardImage src={img2} alt="SUVs" />
          <CardTitle>SUVs</CardTitle>
          <CardText>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </CardText>
        </div>
        <Button bg="suv">Learn More</Button>
      </Card>

      <Card bg="luxury">
        <div>
          <CardImage src={img3} alt="Luxury" />
          <CardTitle>Luxury</CardTitle>
          <CardText>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </CardText>
        </div>
        <Button bg="luxury">Learn More</Button>
      </Card>
    </Container>
  );
}
