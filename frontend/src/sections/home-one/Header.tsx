"use client";

import React, { useContext } from "react";
import FreshFlowContext from "../../components/context/FreshFlowContext";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo_1 from "../../../public/assets/images/resources/352x54_removebg.png";

const Header: React.FC = () => {
  const pathname = usePathname();
  const context = useContext(FreshFlowContext);

  if (!context) {
    throw new Error("FreshFlowContext is null");
  }

  const { setIsMobileOpen, setIsSearch } = context;

  const handleSearch = (): void => {
    setIsSearch((prev) => !prev);
  };
  const isActive = (path: string) => pathname === path;

  return (
    <header className="main-header">
      <div className="main-menu__top">
        <div className="container">
          <div className="main-menu__top-inner">
            <ul className="list-unstyled main-menu__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-mail"></i>
                </div>
                <div className="text">
                  <p>
                    <Link href="mailto:support@example.com">
                      support@example.com
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
                    <Link href="tel:+121234567890">+12 (123) 456 78900</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-pin-1"></i>
                </div>
                <div className="text">
                  <p>684 West College St. Sun City, USA</p>
                </div>
              </li>
            </ul>
            <div className="main-menu__top-social-box">
              <h4 className="main-menu__top-social-title">Follow Us</h4>
              <div className="main-menu__top-social">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon-facebook-app-symbol"></span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon-instagram"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="container">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <Image src={logo_1} alt="FreshFlow Logo" priority />
                  </Link>
                </div>
              </div>
              <div className="main-menu__main-menu-box">
                <button
                  className="mobile-nav__toggler"
                  onClick={() => setIsMobileOpen((pre) => !pre)}
                >
                  <i className="fa fa-bars"></i>
                </button>
                <ul className="main-menu__list">
                  <li className={isActive("/page-one") ? "current" : ""}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={isActive("/pricing-carousel") ? "current" : ""}>
                    <Link href="/pricing-carousel">Services</Link>
                  </li>

                  

                  <li className={isActive("/page-one") ? "current" : ""}>
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li className={isActive("/contact") ? "current" : ""}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__search-cart-box"></div>
                <div className="main-menu__btn-box">
                  <div className="main-menu__btn">
                    <Link href="/contact">
                      <span className="icon-customer-support"></span>
                      Book Schedule
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
