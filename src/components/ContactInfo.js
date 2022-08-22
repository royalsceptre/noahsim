/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { css } from "emotion";

import SocialLink from "./SocialLink";

import { breakpoints } from "../theme";

const anchorStyle = css`
  margin-right: 24px;
  @media (max-width: ${breakpoints.small}) {
    margin: 0 12px;
  }
`;

function ContactInfo() {
  return (
    <React.Fragment>
      <p
        className={css`
          margin-bottom: 30px;
        `}
      >
        I’m available for freelance and currently seeking a full time position.
        If you're interested, feel free to send me an email or fill out the
        provided form.
      </p>
      <div
        className={css`
          font-weight: 500;
          font-size: 1.1rem;
        `}
      >
        Email
      </div>
      <a
        className={css`
          display: inline-block;
          margin-bottom: 30px;
        `}
        href="mailto:noahsim0808@gmail.com"
      >
        noahsim0808@gmail.com
      </a>
      <br />
      <div className={css`display: flex`}>
        <div>
          <SocialLink
            className={anchorStyle}
            type="LinkedIn"
            href="https://www.linkedin.com/in/noah-sim-86733a249"
            width="32px"
            height="32px"
          />
          <SocialLink
            className={anchorStyle}
            type="Github"
            href="https://github.com/royalsceptre"
            width="32px"
            height="32px"
          />
          <SocialLink
            className={anchorStyle}
            type="CodePen"
            href="https://codepen.io/jiangsim"
            width="32px"
            height="32px"
          />
        </div>
        <div>
          <img src="https://www.google.com/maps/vt/data=O05OQ_RZn95UoXBBTOFZ0Q7vH0cPZaRWGLDaUCF1XZ6x-dlWuG63sz527WYb41qp-QEKjON0CDRZwNUYq41gt95uUL0wlO20RMGMB27ddu6eAa--f7HSBo7cTJtdizLR0SAD3kBCPqk3JTvU-iwXj-TtJZIm9mV6Kxx0PTIEPsPorY4o5SfAbVV1WDxrXJRSVIc6IEEBXr5snt1V8hvtQgJ2pqiSORbnQXrhcItbGJ050dY" alt="Map of Montreal" style={{width: "300px"}}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactInfo;
