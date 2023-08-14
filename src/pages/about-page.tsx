import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #7d5ba6;
  color: #fff;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 10vw;
  line-height: 1;
  text-transform: uppercase;
`;

export default function AboutPage() {
  return (
    <>
      <Container>
        <Title>About page</Title>
      </Container>
    </>
  );
}
