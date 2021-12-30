import styled from "styled-components";

//Filter-items
export const ContainerSelect = styled.div`
  border-radius: 15px;
  border: 4px solid green;
  background-color: rgb(160, 160, 179);
  display: grid;
  margin: 20px;
  height: 500px;
  padding: 20px;
`;

export const ItemSelect = styled.div`
  display: grid;
  grid-template-rows: 30% auto;
`;

export const Label = styled.label`
  line-height: 30px;
  font-size: 20px;
`;

export const Select = styled.select`
  margin: 15px 0;
  padding-left: .5rem;
  font-size: 15px;
`;