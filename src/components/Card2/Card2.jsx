import styled from "styled-components";
import luxuryCar from "../../../public/img2.svg";

export default function Card2() {
  return (
    <CarCard>
      <img src={luxuryCar} alt="Luxury" />
      <h1>LUXURY</h1>
      <p>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </p>
      <Button>Learn More</Button>
    </CarCard>
  );
}

const CarCard = styled.div`
  background-color: #004140;

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
  color: #004140;
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