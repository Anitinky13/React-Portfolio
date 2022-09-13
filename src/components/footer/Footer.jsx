import "./footer.scss";
import React from "react";

import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";

export default function Footer() {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a
              href="https://anitinky13.github.io/Portfolio/"
              className="d-flex align-items-center p-0 text-dark"
            >
              <span className="ml-3 h5 font-weight-bold">
                A N A S T A S I Y A ~ L I T V I N O V A
              </span>
            </a>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <a href="https://github.com/Anitinky13">
                  <CDBIcon fab icon="github" />
                </a>
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <a href="https://www.linkedin.com/in/simply-ana/">
                  <CDBIcon fab icon="linkedin" />
                </a>
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}></p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="#intro">About Me</CDBFooterLink>
              <CDBFooterLink href="#portfolio">Portfolio</CDBFooterLink>
              <CDBFooterLink href="/resume">Resume</CDBFooterLink>
              <CDBFooterLink href="#contact">Contact</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Anastasiya Litvinova, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
}
