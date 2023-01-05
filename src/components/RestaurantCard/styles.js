import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #fff;
  border-left: 5px solid transparent;
  transition: 0.7s ease all;
  :hover {
    border-left: 5px solid #6200ee;
    background-color: #00000014;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  line-height: 29px;
  margin-bottom: 10px;
`;
export const Address = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
  text-align: left;
`;

export const RestaurantPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? "block" : "none")};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;
