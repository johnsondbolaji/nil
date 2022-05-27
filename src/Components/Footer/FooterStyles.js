import styled from "styled-components";

export const Box = styled.div`
  padding: 2px 2px;
  background: black;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  height: 80px;

  @media (max-width: 1000px) {
    padding: 2px 2px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 80px;
  margin-top: -15px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 5px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: aqua;
  margin-bottom: 3px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 16px;
  color: orange;
  margin-bottom: 16px;
  font-weight: bold;
`;
