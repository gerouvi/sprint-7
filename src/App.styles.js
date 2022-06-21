import styled from 'styled-components';

export const WrapperWebOptions = styled.div`
  padding: 1em;
  border: 2px solid black;
  border-radius: 1em;
  width: fit-content;
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelInput = styled.label`
  width: 10em;
`;

export const InputNumber = styled.input`
  width: 2em;
`;

export const AddButton = styled.button`
  position: relative;
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.3em;
  border: 1px solid black;
  background-color: orange;
  cursor: pointer;
  margin-left: 0.2em;
  margin-right: 0.2em;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 0.7em;
    height: 0.2em;
    background-color: white;
    border-radius: 0.5em;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 0.2em;
    height: 0.7em;
    background-color: white;
    border-radius: 0.5em;
  }
`;

export const SubstractButton = styled.button`
  position: relative;
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.3em;
  border: 1px solid black;
  background-color: orange;
  cursor: pointer;
  margin-left: 0.2em;
  margin-right: 0.2em;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 0.7em;
    height: 0.2em;
    background-color: white;
    border-radius: 0.5em;
  }
`;
