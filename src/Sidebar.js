import React, { useState, useEffect, useRef } from "react";

import { AppMenu } from "./AppMenu";

const Sidebar = () => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [layoutColorMode, setLayoutColorMode] = useState("light");

  const onColorModeChange = (mode) => {
    setLayoutColorMode(mode);
  };
  const onMenuItemClick = (event) => {
    if (!event.item.items) {
      setOverlayMenuActive(false);
      setMobileMenuActive(false);
    }
  };
  const menu = [
    {
      label: "Home",
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
      ],
    },
  ];

  return (
    <div className="sidebar-main">
      <AppMenu
        model={menu}
        onMenuItemClick={onMenuItemClick}
        layoutColorMode={layoutColorMode}
      />
    </div>
  );
};

export default Sidebar;
