import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 10em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  width: 19.3em;
  height: 3em;
  background-color: white;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
