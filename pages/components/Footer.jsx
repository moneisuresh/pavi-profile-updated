import React from "react";

import { FcCopyright } from "react-icons/fc";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col-2 justify-center bg-black h-18">     

      <p className="flex flex-col text-center">
        <FcCopyright />
      </p>
      <p className="flex ">
        copyright <span className="flex flex-col  ">{currentYear}</span>
      </p>
    </div>
  );
}
