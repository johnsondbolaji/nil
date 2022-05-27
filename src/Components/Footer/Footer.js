import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="./about">Aim</FooterLink>
            <FooterLink href="./about">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="./webdev">Web Development</FooterLink>
            <FooterLink href="./design">Graphic Design</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="./about">Address</FooterLink>
            <FooterLink href="mailto:jonhsondbolaji@gmail.com">
              E-mail
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://github.com/johnsondbolaji/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
            <FooterLink href="https://linkedin.com/mwlite/in/dbjohnson2">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      {/* <p
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "2px"
        }}
      >
        Johnson Daniel: Softare Engineer, design and functionality enthusiast.
      </p> */}
    </Box>
  );
};
export default Footer;
