import styled from "styled-components";

export const InputSearch = styled.input`
  outline: none;
  border-radius: 10px;
  padding-left: 1rem;
  border: 1px solid rgb(126, 82, 82);
  background-color: rgba(230, 230, 230, 0.679);
  font-size: 20px;
  color: rgb(75, 69, 69);
  transition: 0.5s;
  letter-spacing: 3px;
  &:focus{
    background-color: rgba(248, 243, 243, 0.823);
    border: 2px solid rgb(119, 25, 25);
  }
`;

