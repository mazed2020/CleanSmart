import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';  
import PricingCarouselMain from '@/sections/pricing/PricingCarouselMain';
import ServiceTwo from '@/sections/home-one/ServiceTwo';
import FooterOne from '@/sections/home-one/FooterOne';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            {/* <BannerInner title='Pricing Carousel' secondTitle='Pricing Carousel' /> */}
            <BannerInner/>
            <ServiceTwo />
             
            
             
            <FooterOne />
            <StickyNavInner />
        </div>
    );
};

export default page;