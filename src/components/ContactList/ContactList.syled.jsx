import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 15px;
  margin: 20px auto;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  padding: 5px;
  border-radius: 7px;

  :hover,
  :focus {
    transform: scale(1.025);
    background-color: #fff;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 0;

    :hover,
    :focus {
      transform: scale(1.025);
      color: #4801fb;
    }
    &:active {
      scale: 0.95;
      border-radius: 50%;
      color: #f12828a9;
      outline: 3px solid #f12828a9;
      outline-offset: 7px;
    }
  }
`;
