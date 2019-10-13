import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: darkgray;
  justify-content: center;
  align-items: center;
`;

export const NoteName = styled.span`
  font-size: 60px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Octave = styled.span`
  font-size: 26px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Cents = styled.span`
  font-size: 70px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Frequency = styled.span`
  font-size: 30px;
`;
