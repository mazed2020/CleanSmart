"use client"
import React, { useState } from 'react';
import pricimg1 from "../../../public/assets/images/shapes/pricing-two-shape-2.png";
import pricimg2 from "../../../public/assets/images/shapes/pricing-two-shape-3.png";
 
import Image from 'next/image';
import { pricingContent, pricingContentTow } from '../home-two/contents';
import PricingCard from '@/components/elements/PricingCard';
import TextAnimation from '@/components/elements/TextAnimation';
const PricingPlanTow: React.FC = () => {
    const [isPricing, setPricing] = useState<boolean>(false);
    return (
        <section className="pricing-two">
            {/* <div className="pricing-two__shape-bg"></div> */}
            <div className="pricing-two__shape-2 img-bounce">
                <Image src={pricimg1} alt="Decorative shape" />
            </div>
            <div className="pricing-two__shape-3 float-bob-y">
                <Image src={pricimg2} alt="Decorative shape" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline" style={{color:"#EC5800"}}>Plans & Pricing</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation" >
                        <TextAnimation text='Explore Our Affordable and' textColor='black' />
                        <TextAnimation text='Flexible Pricing Options' />
                    </h2>
                </div>
                <div className="pricing-two__inner">
                    <div className="pricing-two__main-tab-box tabs-box">
                         
                        <div className="tabs-content">
                            <div
                                className={`tab ${!isPricing ? "active-tab" : ""}`}
                                style={{ display: !isPricing ? "block" : "none" }}
                            >
                                <div className="pricing-two__tab-content-box">
                                    <div className="row">
                                        {pricingContent.map((item, index) =>
                                            <PricingCard key={index} item={item}/>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`tab ${isPricing ? "active-tab" : ""}`}
                                style={{ display: isPricing ? "block" : "none" }}
                            >
                                <div className="pricing-two__tab-content-box">
                                    <div className="row ">
                                        {pricingContentTow.map((item, index) =>
                                            <PricingCard key={index} item={item}  />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlanTow;