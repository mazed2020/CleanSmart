import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterOne from '@/sections/home-one/FooterOne';
import StickyNavInner from '@/sections/common/StickyNavInner';
import TermsConditionMain from '@/sections/terms&condition/TermsConditionMain'
import PageHeadingTC from '@/sections/terms&condition/PageHeadingTC';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
             
            <BannerInner title='Faq' secondTitle='Faq' />
            <PageHeadingTC/>
            <TermsConditionMain />
             <FooterOne/>
            <StickyNavInner />
        </div>
    );
};

export default page;