import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  MobileNavLogo,
  MobileMenuLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>PiyushShelke_PRS</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
              console.log("clicked");
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="https://github.com/PiyushShelkePRS">Github Profile</GitHubButton>
        </ButtonContainer>

        {open && (
          <MobileMenu open={open}>
            <MobileMenuLink
              href="#about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About
            </MobileMenuLink>
            <MobileMenuLink
              href="#skills"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Skills
            </MobileMenuLink>
            <MobileMenuLink
              href="#experience"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Experience
            </MobileMenuLink>
            <MobileMenuLink
              href="#projects"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </MobileMenuLink>
            <MobileMenuLink
              href="#education"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Education
            </MobileMenuLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="display"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
