"use client";

import React, { useContext } from "react";
import logo from "../../../public/assets/images/resources/352x54_removebg.png";
import Image from "next/image";
import Link from "next/link";
import FreshFlowContext from "../context/FreshFlowContext";

const MobileNavSingle: React.FC = () => {
  const context = useContext(FreshFlowContext);

  if (!context) {
    throw new Error("Context is null. App must be used within a ContextProvider");
  }

  const { isMobileOpen, setIsMobileOpen } = context;

  const handleNavLinkClick = (): void => {
    setIsMobileOpen(false);
  };

  interface NavItem {
    href: string;
    navItem: string;
  }

  const navItems: NavItem[] = [
    {
      href: "/",
      navItem: "Home",
    },
    {
      href: "/services",
      navItem: "Services",
    },
    {
      href: "/blog",
      navItem: "Blog",
    },
    {
      href: "/contact",
      navItem: "Contact",
    },
  ];

  return (
    <div className={`mobile-nav__wrapper ${isMobileOpen ? "expanded" : ""}`}>
      <div
        onClick={() => setIsMobileOpen((pre) => !pre)}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>

      <div className="mobile-nav__content">
        <span
          onClick={() => setIsMobileOpen((pre) => !pre)}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/" aria-label="logo image" onClick={handleNavLinkClick}>
            <Image src={logo} width={150} alt="logo" />
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map((item: NavItem) => (
              <li key={item.href}>
                <Link href={item.href} onClick={handleNavLinkClick}>
                  {item.navItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <Link href="mailto:cleansmartcrew@gmail.com">
              cleansmartcrew@gmail.com
            </Link>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <Link href="tel:0435139276">0435 139 276</Link>
          </li>
        </ul>

        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <Link href="#" className="fab fa-facebook-square"></Link>
            <Link href="#" className="fab fa-instagram"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavSingle;