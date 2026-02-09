import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import BlogMain from '@/sections/blog/BlogMain';
import FooterOne from '@/sections/home-one/FooterOne';


const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Blog' secondTitle='Blog' />
            <BlogMain />
             
            <FooterOne />
            <StickyNavInner />
        </div>
    );
};

export default page;