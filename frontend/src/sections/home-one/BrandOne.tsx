import React from "react";
import brand1 from "../../../public/assets/images/brand/1. Koala Eco.png";
import brand2 from "../../../public/assets/images/brand/2. koh.png";
import brand3 from "../../../public/assets/images/brand/3. Bondi Wash.png";
import brand4 from "../../../public/assets/images/brand/4. Oates.png";
import brand5 from "../../../public/assets/images/brand/5. Sabco.png";
import brand6 from "../../../public/assets/images/brand/6. Whiteley.png";
import brand7 from "../../../public/assets/images/brand/7. Windex.png";
import brand8 from "../../../public/assets/images/brand/8. The Well Store.png";
import brand9 from "../../../public/assets/images/brand/9. Pine O Cleen.png";
import brand10 from "../../../public/assets/images/brand/10. 3M.png";

// 11 - 20
import brand11 from "../../../public/assets/images/brand/11. AGAR.png";
import brand12 from "../../../public/assets/images/brand/12. Ecolab.png";
 
import brand14 from "../../../public/assets/images/brand/14. Research Products.png";
import brand15 from "../../../public/assets/images/brand/15. Kimberly Clark.png";
import brand16 from "../../../public/assets/images/brand/16. Britex.png";
import brand17 from "../../../public/assets/images/brand/17. Nilfisk.png";
import brand18 from "../../../public/assets/images/brand/18. Bosistos.png";
import brand19 from "../../../public/assets/images/brand/19. Polivac.png";
import brand20 from "../../../public/assets/images/brand/20. Tork.png";
import Image, { StaticImageData } from "next/image";
interface BrandItem {
    src: string | StaticImageData,
    alt: string
}
const BrandOne: React.FC = () => {
    const brandImages: BrandItem[] = [
        { src: brand1, alt: "Brand 1" },
        { src: brand2, alt: "Brand 2" },
        { src: brand3, alt: "Brand 3" },
        { src: brand4, alt: "Brand 4" },
        { src: brand5, alt: "Brand 5" },
        { src: brand6, alt: "Brand 6" },
        { src: brand7, alt: "Brand 7" },
        { src: brand8, alt: "Brand 8" },
        { src: brand9, alt: "Brand 9" },
        { src: brand10, alt: "Brand 10" },
      
        { src: brand11, alt: "Brand 11" },
        { src: brand12, alt: "Brand 12" },
        
        { src: brand14, alt: "Brand 14" },
        { src: brand15, alt: "Brand 15" },
        { src: brand16, alt: "Brand 16" },
        { src: brand17, alt: "Brand 17" },
        { src: brand18, alt: "Brand 18" },
        { src: brand19, alt: "Brand 19" },
        { src: brand20, alt: "Brand 20" },
      ];

    const marqueeStyle: { display: string, width: string, animation: string } = {
        display: "flex",
        width: "200%",
        animation: "marquee 20s linear infinite",
    };

    const marqueeReverseStyle : { display: string, width: string, animation: string }= {
        display: "flex",
        width: "200%",
        animation: "marqueeReverse 25s linear infinite",
    };

    return (
        <>
            <section className="brand-one">
                <div className="bg-pattern-home-4"></div>
                <div className="brand-one__wrap">
                    <ul className="brand-one__list" style={marqueeStyle}>
                        {/* First set of images */}
                        {[
                            ...brandImages,
                            ...brandImages, 
                        ].map((brand, index) => (
                            <li key={`first-${index}`}>
                                <Image src={brand?.src} alt={brand?.alt} />
                            </li>
                        ))}
                    </ul>

                    <ul
                        className="brand-one__list brand-one__list-two "
                        style={marqueeReverseStyle}
                    >
                        {/* First set of images */}
                        {[
                            ...brandImages,
                            ...brandImages, 
                        ].map((brand, index) => (
                            <li key={`second-${index}`}>
                                <Image src={brand?.src} alt={brand?.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default BrandOne;
