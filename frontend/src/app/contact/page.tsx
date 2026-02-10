import BannerInner from '@/sections/common/BannerInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import ContactMain from '@/sections/contact/ContactMain';
import FooterOne from '@/sections/home-one/FooterOne';
import React from 'react';
const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Contact' secondTitle='Contact' />
            <ContactMain />
            <FooterOne />
            <StickyNavInner />
        </div>
    );
};

export default page;