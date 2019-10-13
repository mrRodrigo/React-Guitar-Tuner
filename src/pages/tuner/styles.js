import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #d0d7dc;
`;
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #353c41;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(97, 255, 124, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(97, 255, 124, 0);

  ${props => (props.tuned ? `color: #61FF7C;` : `color: #d0d7dc;`)}
`;

export const NoteName = styled.span`
  font-size: 60px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
`;

export const Octave = styled.span`
  font-size: 26px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Cents = styled.span`
  font-size: 70px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Frequency = styled.span`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`;
