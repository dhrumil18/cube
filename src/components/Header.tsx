import React from "react";
import Logo from "../assets/images/image.webp";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
