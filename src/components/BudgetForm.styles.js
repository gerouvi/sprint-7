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

export const InfoButton = styled.button`
  width: 1.6em;
  height: 1.6em;
  background-color: gray;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 0.2em;
  cursor: pointer;
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1em;
`;

export const Btn = styled.button`
  border: none;
  background-color: white;
  padding: 0.8em 1.6em;
  border-radius: 3em;
  box-shadow: 0em 0em 0.3em 0em black;
  cursor: pointer;

  &:active {
    transform: scale(0.7);
  }

  &:disabled {
    box-shadow: none;
    border: 1px solid lightgray;
    transform: scale(1);
    cursor: default;
  }
`;

export const Warning = styled.div`
  color: red;
`;
