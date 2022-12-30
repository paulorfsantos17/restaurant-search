import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const SearchAside = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
`;

export const Logo = styled.img`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 15px; 
`;

export const Map = styled.div`
  background-color: red;
  width: 500px;
`;
export const  CarrouselTitle = styled.h1`
  font-family: ${props => props.theme.fonts.fontFamily};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  text-align: left;
  margin: 16px 0;
`

