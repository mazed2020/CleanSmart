import { PricingItem } from '@/types/home-tow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface PricingCartProps {
    item: PricingItem,
}

const PricingCard: React.FC<PricingCartProps> = ({ item }) => {
     
    return (
        <div className="col-xl-4 col-lg-6 pricing-margin">
            <div
                className={`pricing-two__single ${item.packName === "PREMIUM" ? "pricing-two__single--two" : ""
                    }`}
                     
            >
                <div className="pricing-two__shape-1">
                    <Image src={item.image} alt="Pricing shape" />
                </div>
                 
                <div className="pricing-two__pack-name"  style={{backgroundColor:"#FF7F50"}} >
                    <p style={{fontSize:"23px", }}>{item.packName}</p>
                </div>
                 
                <p className="pricing-two__text" style={{marginTop:"2rem"}}>
                    {item.pricingText1}
                    <br />
                    {item.pricingText2}
                </p>
                
                <div className="pricing-two__points-box" style={{marginTop:"2rem"}}>
                    <ul className="list-unstyled pricing-two__points">
                        {[item.text1, item.text2, item.text3, item.text4, item.text5,item.text6,item.text7,item.text8].map(
                            (text, idx) => (
                                <li key={idx}>
                                    {
                                        text?<div className="icon">
                                        <span className="icon-check-1"></span>
                                    </div>: <br />
                                    }
                                    <div className="text">
                                        <p>{text}</p>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className="pricing-two__btn-box">
                    <Link href="#" className="thm-btn">
                        Choose Plan
                        <span>
                            <i className="icon-plus"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;