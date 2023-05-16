import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  margin: 20px auto;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
`;
export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 0px 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(33, 150, 243);
  color: rgb(255, 255, 255);

  text-transform: uppercase;
  :hover,
  :focus {
    transform: scale(1.025);
    background-color: #5a79c1;
  }
  &:active {
    scale: 0.95;
    background-color: #f12828a9;
    outline: 5px solid #f12828a9;
    outline-offset: 7px;
  }
`;
