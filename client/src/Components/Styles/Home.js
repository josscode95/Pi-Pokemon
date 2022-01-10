import styled from "styled-components";

const ColorFondo = "#e42c2c";

export const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto 280px;
  grid-template-rows: 80px auto 120px;
  grid-template-areas: 
    "h s c"
    "o p p"
    "o f f";
  .container__create{
    border-left: 0.5px solid green;
    grid-area: c;
    background-color: #e42c2c;
    display: grid;
    text-decoration: none;
    padding: 15px 50px;
    .btnCreate{
      cursor: pointer;
    }
  }
`;

export const Title = styled.h3`
  grid-area: h;
  font-family: 'Montserrat', sans-serif;
  background-color: ${ColorFondo};
  text-align: center;
  font-size: 24px;
  line-height: 80px;
  transition: 1s;
  border-right: 0.5px solid green;
  font-weight: bold;
  letter-spacing: 4px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`; 

export const DivSearch = styled.div`
  grid-area: s;
  background-color: ${ColorFondo};
  padding: 15px 35px;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  .btnSearch{
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const DivFilters = styled.div`
  padding-top: 1rem;
  border-top: 0.5px solid green;
  border-right: 0.5px solid green;
  grid-area: o;
  background-color: ${ColorFondo};
  min-height: 555px;
`;

export const ContainerPokes = styled.div`
  grid-area: p;
  background-color: ${ColorFondo};
  border-top: 0.5px solid green;
  height: auto;
`;

export const Footer = styled.div`
  grid-area: f;
  border-top: 0.5px solid green;
  background-color: ${ColorFondo};
  padding: 15px 300px;
  .footer{
    background-color: ${ColorFondo};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
  }
`;

export const ContainerCards = styled.div`
  background-color: rgb(160, 160, 179);
  min-height: 1000px;
  margin: 30px 50px 30px 30px;
  border-radius: 30px;
  border: 3px solid green;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

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