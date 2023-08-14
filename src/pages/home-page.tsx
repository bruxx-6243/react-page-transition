import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1a3a3a;
  color: #fff;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 10vw;
  line-height: 1;
  text-transform: uppercase;
`;

export default function HomePage() {
  return (
    <>
      <Container>
        <Title>Home page</Title>
      </Container>
    </>
  );
}
