import styled from "styled-components";
import suvCar from "../../../public/img1.svg";

export default function ndCard() {
  return (
    <CarCard>
      <img src={suvCar} alt="SUV" />
      <h1>SUVS</h1>
      <p>
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </p>
      <Button>Learn More</Button>
    </CarCard>
  );
}

const CarCard = styled.div`
  background-color: #006971;

  img {
    margin-top: 48px;
    margin-bottom: 35px;
    margin-left: 48px;

    @media (max-width: 730px) {
      margin-top: 10px;
      margin-bottom: -25px;
      width: 80px;
      height: 80px;
    }
  }

  h1 {
    margin-left: 48px;
    font-size: 40px;

    @media (max-width: 730px) {
      font-size: 36px;
    }
  }

  p {
    font-family: "Lexend Deca";
    margin-left: 48px;
    margin-right: 45px;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.5px;

    @media (max-width: 730px) {
      width: 350px;
      font-size: 25px;
      line-height: 28px;
    }
  }
`;

const Button = styled.button`
  margin-left: 48px;
  margin-top: 35px;
  padding: 12px 31px;
  border-radius: 25px;
  border: none;
  color: #006971;
  background-color: white;

  &:active {
    background-color: inherit;
    border: 1px solid white;
    color: white;
  }

  @media (max-width: 730px) {
    margin-bottom: 1%;
  }
`;