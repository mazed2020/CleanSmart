import AboutTow from '@/sections/home-one/AboutTow';
import AfterBeforeHomeTow from '@/sections/home-two/AfterBeforeHomeTow';
import BannerHomeTwo from '@/sections/home-two/BannerHomeTwo';
import ContactTow from '@/sections/home-two/ContactTow';
import FaqHomeTow from '@/sections/home-two/FaqHomeTow';
import FooterTwo from '@/sections/home-two/FooterTow';
import NewsLeterTow from '@/sections/home-two/NewsLeterTow';
import OurBlogTow from '@/sections/home-one/OurBlogTow';
import PricingPlanTow from '@/sections/home-one/PricingPlanTow';
import ProcessTow from '@/sections/home-two/ProcessTow';
import ProjectsTow from '@/sections/home-two/ProjectsTow';
import ServiceTwo from '@/sections/home-one/ServiceTwo';
import StickyNavHomeTwo from '@/sections/home-two/StickyNavHomeTwo';
import TeamTow from '@/sections/home-two/TeamTow';
import TestimonialTow from '@/sections/home-two/TestimonialTow';
import WhyChooseTow from '@/sections/home-two/WhyChooseTow';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <BannerHomeTwo />
            <AboutTow />
            <ServiceTwo />
            <WhyChooseTow />
            <ProjectsTow />
            <ProcessTow />
            <AfterBeforeHomeTow />
            <ContactTow />
            <TestimonialTow />
            <TeamTow />
            <PricingPlanTow />
            <FaqHomeTow />
            <OurBlogTow />
            <NewsLeterTow />
            <FooterTwo />
            <StickyNavHomeTwo />
        </div>
    );
};

export default page;