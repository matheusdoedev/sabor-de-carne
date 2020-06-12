import React from "react";
import { SocialWrapper } from "./styles";
import facebookSvg from "../../assets/img/icons/facebook.svg";
import instagramSvg from "../../assets/img/icons/instagram.svg";
import twitterSvg from "../../assets/img/icons/twitter.svg";

const SocialMedias = () => (
  <SocialWrapper>
    <a href="">
      <img src={facebookSvg} alt="Facebook" />
    </a>
    <a href="">
      <img src={instagramSvg} alt="Instagram" />
    </a>
    <a href="">
      <img src={twitterSvg} alt="Twitter" />
    </a>
  </SocialWrapper>
);

export default SocialMedias;
