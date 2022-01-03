import styled from "styled-components";

export const ContainerDetail = styled.div`
  background-color: #e42c2c;
  height: 100vh;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
`;

export const ContainerImg = styled.div`
  margin: 60px;
  background-color: rgb(151, 151, 158);
  border-radius: 15px;
  border: 3px dashed green;
  overflow: hidden;
  transition: .4s;
  &:hover{
    background-color: rgb(192, 192, 196);
  }
`;

export const ImgPoke = styled.img`
  padding-bottom: 3rem;
  padding-right: 2rem;
  height: 100%;
  width: 100%;
  transition: transform .3s;
  &:hover{
    transform: scale(1.2)
  }
`;

export const ContainerDescription = styled.div`
  background-color: rgb(123, 123, 128);
  margin: 60px;
  display: grid;
  border-radius: 15px;
  transition: .5s;
  &:hover{
    background-color: rgb(161, 161, 167);
  }
`;

export const DescriptionInternal = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Title = styled.h3`
  display: grid;
  font-size: 23px;
  margin-left: 2rem;
  align-items: center;
  font-weight: 100;
  &:hover{
    font-weight: bold;
  }
`;

export const Label = styled.label`
  display: grid;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;  
`;

export const DivTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  padding: 0 15px 0 0;
  grid-column-gap: 5px;  
`;

export const LabelTypes = styled.label`
  text-transform: lowercase;
  border: 1px solid black;
  display: grid;
  align-items: center;
  text-align: center;
  text-transform: lowercase;
  margin: 5px;
  border-radius: 15px;
  background-color: rgb(158, 149, 137);
  font-weight: 50;
  font-size: 15px;  
`;

export const DetailBtn = styled.button`
  margin: 10px 70px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 7px;
  background-color: rgb(201, 204, 204);
  border: none;
  border-radius: 15px;
  &:hover{
    background-color: white;
  }
`;