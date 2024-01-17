import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-row justify-round mb-15 pt-10 items-center">
      <AiOutlineFacebook size={20} className="cursor-pointer" />
      <AiOutlineTwitter size={20} className="cursor-pointer" />
      <AiOutlineMail size={20} className="cursor-pointer" />
    </div>
  );
}

export default Footer;
