"use client";
import React from "react";
import footerimg1 from "../../../public/assets/images/shapes/site-footer-shape-2.png";
import footerimg2 from "../../../public/assets/images/resources/352x54_removebg.png";
import footerimg3 from "../../../public/assets/images/shapes/site-footer-shape-1.png";
import footerimg4 from "../../../public/assets/images/resources/3.5_400x161.png";
import footerImg from "../../../public/assets/images/resources/3.2. 200x206.png"
import Image from "next/image";
import Link from "next/link";
const FooterOne: React.FC = () => {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    alert("tel:+9288006780");
  };
  const handleinfoDom = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    alert("mailto:info@domain.com");
  };

  const handleForm = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const Email = formData.get("footerEmail") as string;
    const Swal = (await import("sweetalert2")).default;

    if (Email) {
      setTimeout(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Subscribed",
          showConfirmButton: false,
          timer: 1000,
        });
      }, 1000);
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Enter your email",
        icon: "error",
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__shape-bg float-bob-y"></div>
      <div className="site-footer__shape-2 img-bounce">
        <Image src={footerimg1} alt="" />
      </div>
      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="row">
              <div className="col-xl-5">
                <div className="site-footer__top-left">
                  <div
                    
                    style={{ backgroundColor: "#05173d",display:"flex", padding:"2rem 0 2rem 2rem", paddingBottom:"2.5rem" }}
                  >
                    <div style={{paddingRight:"2rem"}} >
                      <Link href={"/"}>
                        <Image src={footerImg} alt=""  width={100} height={100}/>
                      </Link>
                    </div>
                    <div>
                    <p
                      
                      style={{ color: "#fff" }}
                    >
                      CleanSmart Crew is a professional cleaning service
                      provider delivering high-quality residential and
                      commercial cleaning solutions with reliability, care, and
                      professionalism.
                    </p>
                    </div>
                   
                  </div>
                  <div className="site-footer__contact-info-box">
                    <ul className="list-unstyled site-footer__contact-info">
                      <li>
                        <div className="site-footer__contact-info-icon">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="site-footer__contact-info-content">
                          <p>Address:</p>
                          <h5>Melbourne, VIC, Australia</h5>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled site-footer__contact-info site-footer__contact-info--two">
                      <li>
                        <div className="site-footer__contact-info-icon">
                          <span className="icon-envelope"></span>
                        </div>
                        <div className="site-footer__contact-info-content">
                          <p>Email Address:</p>
                          <h5>
                            <Link href="#" onClick={handleinfoDom}>
                              summitsgrp@gmail.com
                            </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="site-footer__contact-info-icon">
                          <span className="icon-phone-call"></span>
                        </div>
                        <div className="site-footer__contact-info-content">
                          <p>Phone Number:</p>
                          <h5>
                            <Link href="#" onClick={handlePhoneClick}>
                              0435 139 276
                            </Link>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="site-footer__social-box">
                    <h4 className="site-footer__social-title">Follow Us</h4>
                    <div className="site-footer__social">
                      <Link href="https://www.facebook.com/profile.php?id=61571898744339">
                        <span className="icon-facebook-app-symbol"></span>
                      </Link>

                      <Link href="#">
                        <span className="icon-linkedin-big-logo"></span>
                      </Link>
                      <Link href="https://www.instagram.com/cleansmart_crew?utm_source=qr&igsh=dTR4eG5uYzNyNG1s">
                        <span className="icon-instagram"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                
                <div className="site-footer__top-right">
                  <div className="site-footer__top-right-heading-box"  >
                    <div className="site-footer__shape-1 float-bob-x">
                      <Image src={footerimg3} alt="" />
                    </div>
                    <h3 className="site-footer__top-right-heading-title">
                      {" "}
                      Smarter Cleaning <br />
                      Better Living
                    </h3>
                    <div className="site-footer__top-right-heading-img">
                      <Image src={footerimg4} alt="" />
                    </div>
                  </div>
                  <div className="site-footer__widget-box">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="footer-widget__quick-links">
                          <h4 className="footer-widget__title">Quick Links</h4>
                          <ul className="footer-widget__quick-links-list list-unstyled">
                            <li>
                              {" "}
                              <Link href={"/"}>
                                <span className="icon-next"></span> Home
                              </Link>{" "}
                            </li>

                            <li>
                              {" "}
                              <Link href={"/blog"}>
                                <span className="icon-next"></span>Blogs
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link href={"/contact"}>
                                <span className="icon-next"></span> Contact
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="footer-widget__essential-links">
                          <h4 className="footer-widget__title">Essential</h4>
                          <ul className="footer-widget__quick-links-list list-unstyled">
                            <li>
                              {" "}
                              <Link href={"/faq"}>
                                <span className="icon-next"></span> FAQs Page
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link href="/about" onClick={(e)=>e.preventDefault()}>
                                <span className="icon-next"></span> Terms &
                                Condition
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link href={"/about"}>
                                <span className="icon-next"></span> Privacy
                                Policy
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="footer-widget__services-links">
                          <h4 className="footer-widget__title">Our Services</h4>
                          <ul className="footer-widget__quick-links-list list-unstyled">
                            <li>
                              {" "}
                              <Link href={"/pricing-carousel"}>
                                <span className="icon-next"></span> Residential
                                Cleaning
                              </Link>{" "}
                            </li>

                            <li>
                              {" "}
                              <Link href={"/pricing-carousel"}>
                                <span className="icon-next"></span>Commercial
                                Cleaning
                              </Link>{" "}
                            </li>

                            <li>
                              {" "}
                              <Link href={"/pricing-carousel"}>
                                <span className="icon-next"></span> Specialized
                                Cleaning
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="site-footer__tearms-and-condition">
                    <ul className="list-unstyled site-footer__tearms-and-condition-list">
                    <div className="site-footer__logo" >
                      <Link style={{marginInlineStart:"11rem"}} href={"/"}>
                        <Image src={footerimg2} alt="" />
                      </Link>
                    </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="site-footer__subscribe-form-box">
                  <form
                    onSubmit={handleForm}
                    className="site-footer__subscribe-form"
                  >
                    <div className="site-footer__subscribe-input">
                      <input
                        name="footerEmail"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <button
                      type="submit"
                      className="site-footer__subscribe-btn"
                    >
                      {" "}
                      <span className="icon-send"></span>
                      Get a Free Quote
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="site-footer__bottom-text-box">
                  <p className="site-footer__bottom-text">
                    Copyright © 2026 by{" "}
                    <Link href="https://themeforest.net/user/codearchives">
                      {" "}
                      CLEANSMART CREW
                    </Link>{" "}
                    All Rights Reserved. Developed by SYNCWAVES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
