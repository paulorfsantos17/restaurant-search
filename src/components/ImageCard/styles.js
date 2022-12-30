import styled from "styled-components";

export const Card = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${props => props.theme.fonts.fontFamily};
  color: #fff;
  font-size: 16px;
  margin-top: 5px; ;
`;
