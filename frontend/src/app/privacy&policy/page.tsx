import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterOne from '@/sections/home-one/FooterOne';
import StickyNavInner from '@/sections/common/StickyNavInner';
import PrivecyPolicyMain from '@/sections/privacy&policy/PrivacypolicyMain'
import PageHeading from '@/sections/privacy&policy/PageHeading';
const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Faq' secondTitle='Faq' />
            <PageHeading/>
             <PrivecyPolicyMain/>
             
             <FooterOne/>
            <StickyNavInner />
        </div>
    );
};

export default page;