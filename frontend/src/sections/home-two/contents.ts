import { Accordion, BlogHomeTow, PricingItem } from "@/types/home-tow";
import pricContent1 from "../../../public/assets/images/shapes/pricing-two-shape-1.png";

import blogimg1 from "../../../public/assets/images/blog/1.1.png"
import blogimg2 from "../../../public/assets/images/blog/2.1.png"
import blogimg3 from "../../../public/assets/images/blog/3.1.png"
import blogimg4 from "../../../public/assets/images/blog/4.1.png"

export const pricingContent: PricingItem[] = [
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "Residential Cleaning",
        price: "",
        validity: "",
        pricingText1: "Keep your home fresh, healthy, and spotless with our regular and deep cleaning services tailored to your lifestyle, comfort, and daily routine.",
        pricingText2: "",
        text1: "Regular home cleaning",
        text2: "End of lease cleaning",
        text3: "Kitchen & bathroom cleaning",
        text4: "Bedroom & living area cleaning",
        text5: "Carpet steam cleaning",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "Commercial Cleaning",
        price: "",
        validity: "",
        pricingText1: "Keep your business spaces clean, professional, and welcoming with reliable cleaning services tailored to your operations, brand image, and workplace standards.",
        pricingText2: "",
        text1: "Office cleaning",
        text2: "Retail cleaning",
        text3: "Workspace sanitation",
        text4: "Common area cleaning",
        text5: "Restroom and kitchen cleaning",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "Specialized Cleaning",
        price: "",
        validity: "",
        pricingText1: "Keep your spaces hygienic, safe, and well-maintained with specialised cleaning services designed for unique needs, specific environments.",
        pricingText2: "",
        text1: "Post-construction cleaning",
        text2: "One-time deep cleaning",
        text3: "Event cleaning",
        text4: "Customized cleaning plans",
        text5: "Customized cleaning plans",
    },
];

export const pricingContentTow: PricingItem[] = [
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "PREMIUM",
        price: "240.00",
        validity: "/Yearly",
        pricingText1: "Transform Your Home Into a Fresh",
        pricingText2: "Haven in Just 2 Hours!",
        text1: "Affordable Service Packages",
        text2: "Affordable Service Packages",
        text3: "Satisfaction Guaranteed Results",
        text4: "Quick Response Team",
        text5: "Trusted Local Professionals",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "BUSINESS",
        price: "350.00",
        validity: "/Weekly",
        pricingText1: "Get Spotless Interiors and a Perfect",
        pricingText2: "Shine in Only 3 Hours!",
        text1: "Non-Toxic Cleaning Supplies",
        text2: "Experienced Cleaning Experts",
        text3: "Experienced Cleaning Experts",
        text4: "24/7 Customer Support",
        text5: "Flexible Scheduling",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "BUSINESS",
        price: "550.00",
        validity: "/Weekly",
        pricingText1: "Get Spotless Interiors and a Perfect",
        pricingText2: "Shine in Only 3 Hours!",
        text1: "Non-Toxic Cleaning Supplies",
        text2: "Experienced Cleaning Experts",
        text3: "Experienced Cleaning Experts",
        text4: "24/7 Customer Support",
        text5: "Flexible Scheduling",
    },
];


export const accordionItems1: Accordion[] = [
    {
        title: `What types of cleaning services do you offer?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 1
    },
    {
        title: `Are your cleaning products eco-friendly?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 2
    },
    {
        title: `Do I need to be home during the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling`,
        id: 3
    },
    {
        title: `What if I’m not satisfied with the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 4
    },
]
export const accordionItems2: Accordion[] = [
    {
        title: `What types of cleaning services do you offer?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 5
    },
    {
        title: `Are your cleaning products eco-friendly?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 6
    },
    {
        title: `Do I need to be home during the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling`,
        id: 7
    },
    {
        title: `What if I’m not satisfied with the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 8
    },
]


export const blogsHomeTow: BlogHomeTow[] = [
    {
        id: 1,
        blogLink: [
            {
                lin: "/blog",
                text: "#HomeCleaning"
            },
            {
                lin: "/blog",
                text: "#HealthyLiving"
            },
        ],
        image: blogimg1,
        titleLink: "/blog",
        title: "Why Regular Home Cleaning Improves Your Quality of Life",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 2,
        blogLink: [
            {
                lin: "/blog",
                text: "#EndOfLeaseCleaning"
            },
            {
                lin: "/blog",
                text: "#BondCleaning"
            },
        ],
        image: blogimg2,
        titleLink: "/blog",
        title: "End of Lease Cleaning: Secure Your Bond with Confidence",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 3,
        blogLink: [
            {
                lin: "/blog",
                text: "#KitchenCleaning"
            },
            {
                lin: "/blog",
                text: "#HomeHygiene"
            },
        ],
        image: blogimg3,
        titleLink: "/blog",
        title: "Bathroom Cleaning: More Than Just Visual Cleanliness",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 4,
        blogLink: [
            {
                lin: "/blog",
                text: "#BathroomCleaning"
            },
            {
                lin: "/blog",
                text: "#SanitisedSpaces"
            },
        ],
        image: blogimg4,
        titleLink: "/blog",
        title: " Bedroom & Living Area Cleaning for Healthier Homes",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
]
