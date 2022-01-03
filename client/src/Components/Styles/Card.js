import styled from "styled-components";

export const DivCard = styled.div`
  border-radius: 10px;
  border: 2px solid rgb(61, 59, 59);
  height: 370px;
  margin: 30px;
  display: grid;
  grid-template-rows: auto 15% 15% 20%;
  overflow: hidden;
  transition: .2s;
  &:hover{
    border: 3px solid rgb(44, 42, 42);
  }
`;

export const ImgPoke = styled.img`
  display: grid;
  position: relative;
  object-fit: fill;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  transition: transform .4s;
  padding-bottom: 1.5rem;
  &:hover{
    transform: scale(1.4);
  }
`;

export const NamePoke = styled.h3`
  border-top: 1.5px solid black;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
  display: grid;
  align-items: center;
  letter-spacing: 3px;
`;

export const DivTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  font-size: 15px;
  padding: 0 15px;
  grid-column-gap: 5px;
`;

export const LabelTypes = styled.label`
  border: 1px solid black;
  display: grid;
  align-items: center;
  text-align: center;
  text-transform: lowercase;
  margin: 5px;
  border-radius: 15px;
  background-color: rgb(158, 149, 137);
  font-weight: 50;  
`;

export const BtnType = styled.button`
  margin: 10px;
  cursor: pointer;
  background-color: gray;
  border: none;
  transition: .5s;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  &:hover{
    background-color: rgba(0, 0, 0, .5);
  }
`;