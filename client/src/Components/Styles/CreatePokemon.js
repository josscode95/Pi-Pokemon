import styled from "styled-components";
import imgBack from "../../Assets/back.png";

export const DivCreate = styled.div`
  height: 100vh;
  background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: 90% auto;
`;

export const Form = styled.form`
  background-color: rgba(0,0,0,.9);
  margin: 50px 100px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const TitleForm = styled.h3`
  display: grid;
  grid-column: 1 / 4;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  align-items: center;
  text-align: center;
  font-size: 32px;
  color: rgb(189, 187, 187);
  letter-spacing: 6px;  
`;

export const DivInternal = styled.div`
  display: grid;
  padding: 15px 50px;  
`;

export const LabelForm = styled.label`
  display: grid;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif; 
  color: bisque;
  letter-spacing: 4px;
`;

export const InputForm = styled.input`
  outline: none;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  padding-left: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  background-color: rgb(179, 177, 181);
  letter-spacing: 1px; 
  &:focus{
    background-color: rgba(179, 177, 181, .2);
  }
`;

export const DivTypes = styled.div`
  display: grid;
  padding: 0 50px;
`;

export const LabelType = styled.label`
  display: grid;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif; 
  color: bisque;
  letter-spacing: 4px;
`;

export const ContainerType = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  padding: 0;
  grid-column-gap: 5px; 
`;

export const DivTypeInt = styled.div`
  padding: 8px;
`;

export const TypeButton = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 65% auto; 
`;

export const FormBtn = styled.button`
  grid-column: 2/3;
  cursor: pointer;
  margin: 30px 50px;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 7px;
  border: none;
  background-color: rgba(0,0,0,.5);
  transition: .5s;
  border-radius: 15px;
  &:hover{
    background-color: bisque;
  }
`;

export const BackButton = styled.button`
  margin: 0 50rem 1rem 6.5rem;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  background-color: rgb(67, 61, 54);
  cursor: pointer;
  font-size: 17px;
  letter-spacing: 3px;
  transition: .4s;
  &:hover{
    background-color: bisque;
  }
`;