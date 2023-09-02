import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: red;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Heading as="h1">h1. Hello world...</Heading>

          <Heading as="h2">h2. Hello world...</Heading>

          <Heading as="h3">h3. Hello world...</Heading>

          <Heading>default. Hello world...</Heading>
        </Row>
        <Row>
          <Button>Click me...</Button>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
