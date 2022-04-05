import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuList, MenuListItem } from "./styles";

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
    {
      name: "Contact",
      url: "/contact",
    },
  ]);

  return (
    <MenuList>
      {menus.map((menu) => (
        <MenuListItem>
          <Link to={menu.url}>{menu.name}</Link>
        </MenuListItem>
      ))}
    </MenuList>
  );
};

export default Header;
