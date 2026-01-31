import SearchProp from "@/components/elements/SearchProp";
import AboutTow from "@/sections/home-one/AboutTow";
import Banner from "@/sections/home-one/Banner";
import BrandOne from "@/sections/home-one/BrandOne";
import ContactOne from "@/sections/home-one/ContactOne";
import CounterOne from "@/sections/home-one/CounterOne";
import FooterOne from "@/sections/home-one/FooterOne";
import Header from "@/sections/home-one/Header";
import OfficeLocation from "@/sections/home-one/OfficeLocation";
import ServiceTwo from "@/sections/home-one/ServiceTwo";
import SlidingTestTow from "@/sections/home-one/SlidingTestTow";
import SlidingTextOne from "@/sections/home-one/SlidingTextOne";
import StrickyNavHomeOne from "@/sections/home-one/StrickyNavHomeOne";
import TestimonialOne from "@/sections/home-one/TestimonialOne";
import WhyChooseOne from "@/sections/home-one/WhyChooseOne";
import PricingPlanTow from "@/sections/home-one/PricingPlanTow";
import OurBlogTow from "@/sections/home-one/OurBlogTow";
import PricingCarouselMain from "@/sections/pricing/PricingCarouselMain";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <Banner />
      <SlidingTextOne />
      <AboutTow />
      <PricingPlanTow />

      <SlidingTestTow />
      <CounterOne />

      <WhyChooseOne />

      <ContactOne />
      <TestimonialOne />
      <BrandOne />
       
      
      <OurBlogTow />

      <FooterOne />
      <StrickyNavHomeOne />
      <SearchProp />
    </div>
  );
}
