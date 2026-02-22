"use client";
import React, { useRef, useState } from "react";
import servimg1 from "../../../public/assets/images/shapes/services-two-shape-1.png";
import servimg2 from "../../../public/assets/images/shapes/services-two-shape-2.png";
import servimg3 from "../../../public/assets/images/services/1. Services 1.png";
import servimg4 from "../../../public/assets/images/services/2. Services 2.png";
import servimg5 from "../../../public/assets/images/services/3. Services 3.png";
import servimg6 from "../../../public/assets/images/services/4. Services 4.png";
import servimg7 from "../../../public/assets/images/services/5. Services 5.png";
import servimg8 from "../../../public/assets/images/services/6. Services 6.png";
import servimg9 from "../../../public/assets/images/services/services-2-5.jpg";
import servimg10 from "../../../public/assets/images/services/services-2-5.jpg";


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
// residential cleaning data
const  residentialItems: HoverItem[] = [
  {
    id: 1,
    title: "Regular Home Cleaning",
    text1: "Reliable regular home cleaning to keep your living",
    text2: "space fresh, organized, and consistently clean.",
    image: servimg3,
    itemLink: "/regular-home-cleaning",
  },
  {
    id: 2,
    title: "End of Lease Cleaning",
    text1: "Thorough move-out cleaning designed to meet",
    text2: "inspection standards and ensure stress-free handovers.",
    image: servimg4,
    itemLink: "/end-of-lease-cleaning",
  },
  {
    id: 3,
    title: "Kitchen & Bathroom Care",
    text1: "Deep cleaning and sanitisation of kitchens and bathrooms",
    text2: "for hygiene, freshness, and complete safety.",
    image: servimg5,
    itemLink: "/kitchen-bathroom-cleaning",
  },
  {
    id: 4,
    title: "Bedroom & Living Space Cleaning",
    text1: "Complete cleaning for bedrooms and living areas,",
    text2: "creating a healthy and comfortable environment.",
    image: servimg6,
    itemLink: "/bedroom-living-cleaning",
  },
  {
    id: 5,
    title: "Carpet Steam Cleaning",
    text1: "Professional steam cleaning to remove dirt, stains,",
    text2: "bacteria, and allergens from carpets.",
    image: servimg7,
    itemLink: "/carpet-steam-cleaning",
  },
  {
    id: 6,
    title: "Mattress & Sofa Cleaning",
    text1: "Specialised mattress and sofa cleaning for improved",
    text2: "freshness, hygiene, and fabric protection.",
    image: servimg8,
    itemLink: "/mattress-sofa-cleaning",
  },
  {
    id: 7,
    title: "Rug & Carpet Cleaning",
    text1: "Deep cleaning for rugs and carpets to restore",
    text2: "appearance and extend fabric life.",
    image: servimg9,
    itemLink: "/rug-carpet-cleaning",
  },
  {
    id: 8,
    title: "Car Seat Steam Cleaning",
    text1: "Professional car seat steam cleaning for stain",
    text2: "removal, hygiene, and fresh interiors.",
    image: servimg10,
    itemLink: "/car-seat-steam-cleaning",
  },
];
//Commercial Cleaning

const  commercialItems: HoverItem[] = [
  {
    id: 1,
    title: "Office Cleaning",
    text1: "Reliable office cleaning to maintain a clean, organised,",
    text2: "and productive work environment for your team and clients.",
    image: servimg3,
    itemLink: "/office-cleaning",
  },
  {
    id: 2,
    title: "Retail Cleaning",
    text1: "Detail-focused retail cleaning that keeps your store spotless,",
    text2: "welcoming, and aligned with your brand image.",
    image: servimg4,
    itemLink: "/retail-cleaning",
  },
  {
    id: 3,
    title: "Workspace Sanitation",
    text1: "Thorough sanitisation of workstations and high-touch surfaces",
    text2: "to promote hygiene and employee wellbeing.",
    image: servimg5,
    itemLink: "/workspace-sanitation",
  },
  {
    id: 4,
    title: "Common Area Cleaning",
    text1: "Consistent cleaning of shared spaces to ensure cleanliness,",
    text2: "safety, and a positive experience for everyone.",
    image: servimg6,
    itemLink: "/common-area-cleaning",
  },
  {
    id: 5,
    title: "Restroom and Kitchen Cleaning",
    text1: "Deep cleaning and disinfection of restrooms and kitchen areas",
    text2: "for hygiene, freshness, and daily comfort.",
    image: servimg7,
    itemLink: "/restroom-kitchen-cleaning",
  },
];

const hoverItems: HoverItem[] = [
  {
    id: 1,
    title: "Post-Construction Cleaning",
    text1: "Detailed cleaning to remove dust, debris, and residue,",
    text2: "leaving newly built or renovated spaces spotless and ready to use.",
    image: servimg3,
    itemLink: "/post-construction-cleaning",
  },
  {
    id: 2,
    title: "One-Time Deep Cleaning",
    text1: "Intensive top-to-bottom cleaning designed to refresh your",
    text2: "space and eliminate built-up dirt, grime, and hidden contaminants.",
    image: servimg4,
    itemLink: "/one-time-deep-cleaning",
  },
  {
    id: 3,
    title: "Event Cleaning",
    text1: "Pre- and post-event cleaning services to keep your venue",
    text2: "clean, organised, and presentable for every occasion.",
    image: servimg5,
    itemLink: "/event-cleaning",
  },
  {
    id: 4,
    title: "Customized Cleaning Plans",
    text1: "Flexible cleaning solutions tailored to your specific space,",
    text2: "schedule, and service requirements.",
    image: servimg6,
    itemLink: "/customized-cleaning-plans",
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
              {residentialItems.map((item) => (
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
                      {/* style={{fontSize:"18px"}} */}
                      <h3 className="services-two__title" >
                        <Link href={item.itemLink} onClick={(e)=>e.preventDefault()}>{item.title}</Link>
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
                      {/* <Link href={item.itemLink}>
                        View Details
                        <span className="icon-diagonal-arrow"></span>
                      </Link> */}
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
              {commercialItems.map((item) => (
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
                        <Link href={item.itemLink} onClick={(e)=>e.preventDefault()}>{item.title}</Link>
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
                      {/* <Link href={item.itemLink}>
                        View Details
                        <span className="icon-diagonal-arrow"></span>
                      </Link> */}
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
                        <Link href={""} onClick={(e)=>e.preventDefault()}>{item.title}</Link>
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
                      {/* <Link href={item.itemLink}>
                        View Details
                        <span className="icon-diagonal-arrow"></span>
                      </Link> */}
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
