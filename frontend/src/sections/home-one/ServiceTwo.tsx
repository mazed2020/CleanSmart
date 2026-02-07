"use client";
import React, { useRef, useState } from "react";
import servimg1 from "../../../public/assets/images/shapes/services-two-shape-1.png";
import servimg2 from "../../../public/assets/images/shapes/services-two-shape-2.png";
import servimg3 from "../../../public/assets/images/services/services-2-1.jpg";
import servimg4 from "../../../public/assets/images/services/services-2-2.jpg";
import servimg5 from "../../../public/assets/images/services/services-2-3.jpg";
import servimg6 from "../../../public/assets/images/services/services-2-4.jpg";
import servimg7 from "../../../public/assets/images/services/services-2-5.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import SectionHeading from "./SectionHeading";

// Define types
interface HoverItem {
  title: string;
  text1: string;
  text2: string;
  image: string | StaticImageData;
  itemLink: string;
  id: number;
}

const hoverItems: HoverItem[] = [
  {
    title: "Sparkling Home Solutions",
    text1: "Expert cleaning services to keep your home fresh,",
    text2: "tidy, and sparkling clean.",
    image: servimg3,
    itemLink: "/office-cleaning",
    id: 1,
  },
  {
    title: "Pristine Office Cleaning",
    text1: "Professional cleaning tailored for offices to maintain",
    text2: "a clean and productive workspace.",
    image: servimg4,
    itemLink: "/commercial-cleaning",
    id: 2,
  },
  {
    title: "Deep Clean Experts",
    text1: "Specialized deep cleaning for homes or businesses,",
    text2: "tackling dirt in hard-to-reach places.",
    image: servimg5,
    itemLink: "/deep-cleaning",
    id: 3,
  },
  {
    title: "Hygiene Space Services",
    text1: "Comprehensive cleaning solutions to ensure",
    text2: "sanitized and spotless environments.",
    image: servimg6,
    itemLink: "/sanitizing-mopping",
    id: 4,
  },
  {
    title: "Eco-Friendly Cleaning",
    text1: "Sustainable cleaning services using green",
    text2: "products for a healthier home and planet.",
    image: servimg7,
    itemLink: "/residential-cleaning",
    id: 5,
  },
];

const ServiceTwo: React.FC = () => {
  const [xPosition, setXPosition] = useState<number>(0);
  const [mouseEnter, setMouseEnter] = useState<number>(0);
  const containerRef = useRef<HTMLLIElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>): void => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setXPosition(x);
    }
  };
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
  
    const y = el.getBoundingClientRect().top + window.scrollY;
    const offset = 120; // adjust if you have sticky header
    window.scrollTo({ top: y - offset, behavior: "smooth" });
  };
  const btnStyle: React.CSSProperties = {
    border: "none",
    padding: "10px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    background: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };
  
  return (
    <section className="services-two">
      <div className="services-two__shape-bg-1"></div>
      <div className="services-two__shape-bg-2"></div>
      <div className="services-two__shape-bg-3"></div>
      <div className="services-two__shape-1 float-bob-x">
        <Image src={servimg1} alt="Service shape decoration" />
      </div>
      <div className="services-two__shape-2 float-bob-y">
        <Image src={servimg2} alt="Service shape decoration" />
      </div>
      <div className="services-two__shape-3"></div>
      <div className="services-two__shape-4"></div>
      <div className="services-two__shape-5"></div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-box">
              <div className="section-title__tagline-shape"></div>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <span className="section-title__tagline">Our Services</span>
          </div>
          <h2 className="section-title__title title-custom-animation">
            <TextAnimation
              text="Explore the Full Range of Services We"
              textColor="black"
            />
            <TextAnimation text="Offer to Meet Your Needs" />
          </h2>
        </div>
        {/* three button here adding */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}>
  <div
    style={{
      display: "flex",
      padding: "6px",
      background: "#ffffff",
      borderRadius: "999px",
      boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
      gap: "6px",
    }}
  >
    <button
      onClick={() => scrollToSection("residential-cleaning")}
      style={btnStyle}
    >
      Residential
    </button>

    <button
      onClick={() => scrollToSection("commercial-cleaning")}
      style={btnStyle}
    >
      Commercial
    </button>
    <button
      onClick={() => scrollToSection("special-cleaning")}
      style={btnStyle}
    >
      Specialised
    </button>
  </div>
</div>






        {/* section 1 */}
        <div id="residential-cleaning">
          <SectionHeading title="Residential Cleaning" />
          <div className="services-two__inner">
            <ul className="services-two__services-list list-unstyled">
              {hoverItems.map((item) => (
                <li
                  key={item.id}
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setMouseEnter(item.id)}
                  onMouseLeave={() => setMouseEnter(0)}
                  className="hover-item"
                  style={{ position: "relative" }}
                >
                  <div className="services-two__icon-and-title-box">
                    <div className="services-two__icon">
                      <span className="icon-oosouji"></span>
                    </div>
                    <div className="services-two__title-box">
                      <div className="services-two__count"></div>
                      <h3 className="services-two__title">
                        <Link href={item.itemLink}>{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="services-two__text-and-btn-box">
                    <p className="services-two__text">
                      {item.text1}
                      <br />
                      {item.text2}
                    </p>
                    <div className="services-two__btn-box">
                      <Link href={item.itemLink}>
                        View Details
                        <span className="icon-diagonal-arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="hover-item__box"
                    style={{
                      opacity: mouseEnter === item.id ? 1 : 0,
                      left: `${xPosition + 307}px`,
                    }}
                  >
                    <Image
                      src={item.image}
                      className="hover-item__box-img"
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* section 2 */}
        <div id="commercial-cleaning">
          <SectionHeading title="Commercial Cleaning" />
          <div className="services-two__inner">
            <ul className="services-two__services-list list-unstyled">
              {hoverItems.map((item) => (
                <li
                  key={item.id}
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setMouseEnter(item.id)}
                  onMouseLeave={() => setMouseEnter(0)}
                  className="hover-item"
                  style={{ position: "relative" }}
                >
                  <div className="services-two__icon-and-title-box">
                    <div className="services-two__icon">
                      <span className="icon-oosouji"></span>
                    </div>
                    <div className="services-two__title-box">
                      <div className="services-two__count"></div>
                      <h3 className="services-two__title">
                        <Link href={item.itemLink}>{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="services-two__text-and-btn-box">
                    <p className="services-two__text">
                      {item.text1}
                      <br />
                      {item.text2}
                    </p>
                    <div className="services-two__btn-box">
                      <Link href={item.itemLink}>
                        View Details
                        <span className="icon-diagonal-arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="hover-item__box"
                    style={{
                      opacity: mouseEnter === item.id ? 1 : 0,
                      left: `${xPosition + 307}px`,
                    }}
                  >
                    <Image
                      src={item.image}
                      className="hover-item__box-img"
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* //section 3 */}
        <div id="special-cleaning">
          <SectionHeading title="Special Cleaning" />

          <div className="services-two__inner">
            <ul className="services-two__services-list list-unstyled">
              {hoverItems.map((item) => (
                <li
                  key={item.id}
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setMouseEnter(item.id)}
                  onMouseLeave={() => setMouseEnter(0)}
                  className="hover-item"
                  style={{ position: "relative" }}
                >
                  <div className="services-two__icon-and-title-box">
                    <div className="services-two__icon">
                      <span className="icon-oosouji"></span>
                    </div>
                    <div className="services-two__title-box">
                      <div className="services-two__count"></div>
                      <h3 className="services-two__title">
                        <Link href={item.itemLink}>{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="services-two__text-and-btn-box">
                    <p className="services-two__text">
                      {item.text1}
                      <br />
                      {item.text2}
                    </p>
                    <div className="services-two__btn-box">
                      <Link href={item.itemLink}>
                        View Details
                        <span className="icon-diagonal-arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="hover-item__box"
                    style={{
                      opacity: mouseEnter === item.id ? 1 : 0,
                      left: `${xPosition + 307}px`,
                    }}
                  >
                    <Image
                      src={item.image}
                      className="hover-item__box-img"
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
