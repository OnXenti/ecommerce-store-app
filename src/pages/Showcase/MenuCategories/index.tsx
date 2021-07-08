import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3vh;
  padding-bottom: 3vh;
  box-sizing: border-box;
  width: 100%;
  box-sizing: border-box;
`;

export const Category = styled.div`
  font-family: 'Roboto Bold';
  font-size: 1.4rem;
  color: #484848;
`;

export default function MenuCategories(props: any) {

  const category = props.category as String;

  return (
    <Container>
      <Category>{category}</Category>
    </Container>
  );
}