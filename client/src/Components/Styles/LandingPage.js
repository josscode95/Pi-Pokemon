import styled from 'styled-components';

export const DivLanding = styled.div`
  height: 100vh;
  background: black;
`;

export const ImgLanding = styled.img`
  object-fit: fill;
  width: 100%;
  height: 99%;
`;

export const LinkText = styled.button`
  display: block;
  position: absolute;
  top: 0;
  top: -140px;
  margin: 250px;
  padding: 25px 30px;
  cursor: pointer;
  letter-spacing: 7px;
  font-size: 20px;
  background: #000000;
  border: 2px solid #7d7f84;
  color: #7d7f84;
  transition: 0.5s;
  &:hover{
    font-size: 24px;
    border-radius: 10px;
    background: #7d7f84;
    color: #000000;
    box-shadow: 0 0 4px #7d7f84,
                0 0 34px #7d7f84,
                0 0 65px #7d7f84,
                0 0 110px #7d7f84;
  }
`;