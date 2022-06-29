import styled from 'styled-components';

export const ContainerFlex = styled.div`
  width: 20em;

  margin-top: 2em;
  display: flex;
  justify-content: space-around;

  margin-left: 3em;
`;
export const Button = styled.button`
  border: 1px solid black;
  border-radius: 6em;
  background-color: white;
  margin-right: 2em;
  cursor: pointer;
  color: ${({ color }) => color};
  border-color: ${({ color }) => color};
  cursor: ${({ color }) => (color === 'black' ? 'pointer' : 'default')};
`;
