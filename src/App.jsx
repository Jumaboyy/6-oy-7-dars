import styled from "styled-components";
import Card1 from "./components/Card1/Card1";
import Card2 from "./components/Card2/Card2";
import Card3 from "./components/Card3/Card3";

function App() {
  return (
    <Container>
      <Card1 />
      <Card2 />
      <Card3 />
    </Container>
  );
}
const Container = styled.div`
  font-family: "Big Shoulders";
  max-width: 920px;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;

  @media (max-width: 730px) {
    height: 420px;
    grid-template-columns: 1fr;
  }
`;

export default App;
