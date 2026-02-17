"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import image1 from "../../../public/assets/images/resources/352x54_removebg.png";
 
 
import FreshFlowContext from "@/components/context/FreshFlowContext";

interface BannerOneProps {
  title?: string;
  secondTitle?: string;
  secondTitleLink?: string;
  thirdTitle?: string;
}
interface FreshFlowContextType {
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const BannerInner: React.FC<BannerOneProps> = ({
  title = "",
  secondTitle = "",
  secondTitleLink = "",
  thirdTitle = "",
}) => {
  const context = useContext(FreshFlowContext) as FreshFlowContextType | null;

  if (!context) {
    throw new Error("BannerOne must be used within a ContextProvider");
  }

  const { setIsMobileOpen, setSideBar } = context;
  const pathName = usePathname();

  // const isCurrent = (pathArray: PagePath[]): boolean => {
  //   return pathArray.includes(pathName as PagePath);
  // };

  const handleMobileToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileOpen((prev) => !prev);
  };

  const handleSidebarToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSideBar((prev) => !prev);
  };

  return (
    <>
      <header className="main-header-three">
        <div className="main-menu-three__top">
          <div className="container">
            <div className="main-menu-three__top-inner">
              <ul className="list-unstyled main-menu-three__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-mail"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="summitsgrp@gmail.com">
                      summitsgrp@gmail.com
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-phone-call"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="0435 139 276">0435 139 276</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-pin-1"></i>
                  </div>
                  <div className="text">
                    <p>Melbourne, VIC, Australia</p>
                  </div>
                </li>
              </ul>
              <div className="main-menu-three__top-social-box">
                <h4 className="main-menu-three__top-social-title">Follow Us</h4>
                <div className="main-menu-three__top-social">
                  <Link href="#" aria-label="Facebook">
                    <span className="icon-facebook-app-symbol"></span>
                  </Link>
                   
                  <Link href="#" aria-label="Instagram">
                    <span className="icon-instagram"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="container">
              <div className="main-menu-three__wrapper-inner">
                <div className="main-menu-three__left">
                  <div className="main-menu-three__logo">
                    <Link href="/">
                      <Image src={image1} alt="Logo" />
                    </Link>
                  </div>
                </div>

                <div className="main-menu-three__main-menu-box">
                  <Link
                    href="#"
                    onClick={handleMobileToggle}
                    className="mobile-nav__toggler"
                    aria-label="Toggle mobile menu"
                  >
                    <i className="fa fa-bars"></i>
                  </Link>

                  {/* ✅ ROUTES CHANGED HERE ONLY */}
                  <ul className="main-menu__list">
                    {/* Home */}
                    <li className={pathName === "/" ? "current" : ""}>
                      <Link href="/">Home</Link>
                    </li>

                    {/* Services -> pricing-carousel */}
                    <li
                      className={
                        pathName === "/services" ? "current" : ""
                      }
                    >
                      <Link href="/services">Services</Link>
                    </li>

                    {/* Blog */}
                    <li className={pathName === "/blog" ? "current" : ""}>
                      <Link href="/blog">Blog</Link>
                    </li>

                    {/* Contact */}
                    <li className={pathName === "/contact" ? "current" : ""}>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                <div className="main-menu-three__right">
                  <div className="main-menu-three__btn-box">
                    <Link href="/contact" className="thm-btn">
                      Get Started
                      <span>
                        <i className="icon-diagonal-arrow"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="main-menu-three__nav-sidebar-icon">
                    <Link
                      onClick={handleSidebarToggle}
                      className="navSidebar-button"
                      href="#"
                      aria-label="Toggle sidebar"
                    >
                      <span className="icon-app"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

       
    </>
  );
};

export default BannerInner;
