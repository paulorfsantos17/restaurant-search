import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  gap: 2px;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 45vw;
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
  width: 100vw;
`;
export const CarrouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  text-align: left;
  margin: 16px 0;
`;

export const Carrousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  color: rgba(0, 0, 0, 0.7);
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;
export const ModalContent = styled.p`
  margin-bottom: 10px;
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;
