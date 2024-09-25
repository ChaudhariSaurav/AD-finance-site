import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { key: "home", label: "Home", link: "/" },
    { key: "about", label: "About Us", link: "/about" },
    { key: "contact", label: "Contact Us", link: "/contact" },
    { key: "gallery", label: "Gallery", link: "/Gallary" },
    {
      key: "login",
      label: "Login",
      link: "https://fiance.netlify.app/",
      external: true,
    },
  ];

  // Render menu items
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Menu.Item key={item.key} onClick={() => setCollapsed(true)}>
        {item.external ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            {item.label}
          </a>
        ) : (
          <Link to={item.link} className="text-white">
            {item.label}
          </Link>
        )}
      </Menu.Item>
    ));
  };

  return (
    <nav className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/laxmifinance/IMG-20240603-WA0018.jpg?updatedAt=1720653923997"
              alt="Jr Groups"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <React.Fragment key={item.key}>
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  {item.label}
                </a>
              ) : (
                <Link to={item.link} className="text-white hover:text-gray-300">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleCollapsed}>
            {collapsed ? (
              <MenuOutlined className="h-6 w-6 text-white" />
            ) : (
              <CloseOutlined className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <Drawer
          placement="right"
          closable={false}
          visible={!collapsed}
          bodyStyle={{ padding: 0 }}
        >
          <Menu theme="dark" mode="inline">
            {renderMenuItems()}
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
