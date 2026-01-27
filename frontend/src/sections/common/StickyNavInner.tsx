'use client';

import image1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import image3 from "../../../public/assets/images/home-showcase/home-showcase-1-2.jpg";
import image4 from "../../../public/assets/images/home-showcase/home-showcase-1-3.jpg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import FreshFlowContext from "@/components/context/FreshFlowContext";
import { PagePath } from "@/types/about";

const StickyNavInner = () => {
  const context = useContext(FreshFlowContext);
  if (!context) {
    throw new Error("Context Null");
  }
  const { setSideBar } = context;

  const pathName = usePathname();

  // ✅ same style as your <nav> example
  const isActive = (path: string) => pathName === path;

  const isCurrent = (pathArray: PagePath[]): boolean => {
    return pathArray.includes(pathName as PagePath);
  };

  const [isStick, setIsSticky] = useState<boolean>(false);
  const headerScrollPos: number = 130;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > headerScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`stricky-header stricked-menu main-menu main-menu-three ${isStick ? "stricky-fixed" : ""}`}>
      <div className="sticky-header__content">
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
                <Link href="#" className="mobile-nav__toggler">
                  <i className="fa fa-bars"></i>
                </Link>

                {/* ✅ ONLY this UL is changed (routes/current class logic) */}
                <ul className="main-menu__list">
                  <li className={isActive("/") ? "current" : ""}>
                    <Link href="/">Home</Link>
                  </li>

                  <li className={isActive("/pricing-carousel") ? "current" : ""}>
                    <Link href="/pricing-carousel">Services</Link>
                  </li>

                  <li className={isActive("/blog") ? "current" : ""}>
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li className={isActive("/contact") ? "current" : ""}>
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
                  <Link className="navSidebar-button" href="#" onClick={() => setSideBar((pre) => !pre)}>
                    <span className="icon-app"></span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavInner;
