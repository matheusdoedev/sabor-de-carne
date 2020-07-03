import React from "react";
// styles
import { SocialWrapper } from "./styles";
// social medias icons
import facebookSvg from "../../assets/img/icons/facebook.svg";
import instagramSvg from "../../assets/img/icons/instagram.svg";
import twitterSvg from "../../assets/img/icons/twitter.svg";

const SocialMedias = () => (
  <SocialWrapper>
    <a href="facebook.com" target="BLANK">
      <img src={facebookSvg} alt="Facebook" />
    </a>
    <a href="instagram.com" target="BLANK">
      <img src={instagramSvg} alt="Instagram" />
    </a>
    <a href="twitter.com" target="BLANK">
      <img src={twitterSvg} alt="Twitter" />
    </a>
  </SocialWrapper>
);

export default SocialMedias;
