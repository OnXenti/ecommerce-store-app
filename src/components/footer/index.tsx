import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  width: 100%;
  height: 12vh;
  border: 1px dashed black;
  box-sizing: border-box;
`;

export default function Footer() {
  return (
    <Container>Footer</Container>
  );
}