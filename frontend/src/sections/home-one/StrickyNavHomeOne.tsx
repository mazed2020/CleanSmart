"use client";
import React, { useContext, useEffect, useState } from "react";
import logo_1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import image3 from "../../../public/assets/images/home-showcase/home-showcase-1-2.jpg";
import image4 from "../../../public/assets/images/home-showcase/home-showcase-1-3.jpg";
import Image from "next/image";
import Link from "next/link";
import FreshFlowContext from "@/components/context/FreshFlowContext";
import { usePathname } from "next/navigation";

const StrickyNavHomeOne: React.FC = () => {
  const context = useContext(FreshFlowContext);
  if (!context) {
    throw new Error("Context null");
  }

  const { setIsMobileOpen, setIsSearch } = context;

  const handleSearch = (): void => {
    setIsSearch((prev) => !prev);
  };

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

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
    <div className={`stricky-header stricked-menu main-menu ${isStick ? "stricky-fixed" : ""}`}>
      <div className="sticky-header__content">
        <div className="main-menu__wrapper">
          <div className="container">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href={"/"}>
                    <Image className="" src={logo_1} alt="" />
                  </Link>
                </div>
              </div>

              <div className="main-menu__main-menu-box">
                <button className="mobile-nav__toggler" onClick={() => setIsMobileOpen((pre) => !pre)}>
                  <i className="fa fa-bars"></i>
                </button>

                <ul className="main-menu__list">
                  {/* ✅ Home */}
                  <li className={isActive("/home") ? "current" : ""}>
                    <Link href="/home">Home</Link>
                  </li>

                  {/* ✅ Services -> /pricing-carousel */}
                  <li className={isActive("/pricing-carousel") ? "current" : ""}>
                    <Link href="/pricing-carousel">Services</Link>
                  </li>

                  {/* ✅ Blog */}
                  <li className={isActive("/blog") ? "current" : ""}>
                    <Link href="/blog">Blog</Link>
                  </li>

                  {/* ✅ Contact */}
                  <li className={isActive("/contact") ? "current" : ""}>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="main-menu__right">
                <div className="main-menu__btn-box">
                  <div className="main-menu__btn">
                    <Link href={"/contact"}>
                      <span className="icon-customer-support"></span>
                      Book Schedule
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrickyNavHomeOne;
