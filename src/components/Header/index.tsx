import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuList } from "./styles";

interface MenuProps {
  name?: string;
  url?: string;
}

const Header: React.FC<MenuProps> = ({ name, url }) => {
  const [menus, setMenus] = useState([
    {
      name: "GloboStreaming",
      url: "/",
    },
    {
      name: "Movies",
      url: "/movies",
    },
    {
      name: "Series",
      url: "/series",
    },
  ]);

  return (
    <div className="header">
      <MenuList>
        {menus.map((menu) => (
          <li>
            <Link to={menu.url}>{menu.name}</Link>
          </li>
        ))}
      </MenuList>
    </div>
  );
};

export default Header;
