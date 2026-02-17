
import { Blog } from "@/types/home-one"
import blogImg1 from "../../../public/assets/images/blog/1.2.png"
import blogImg2 from "../../../public/assets/images/blog/2.2.png"
import blogImg3 from "../../../public/assets/images/blog/3.2.png"
import blogImg4 from "../../../public/assets/images/blog/4.2.png"
import blogImg5 from "../../../public/assets/images/blog/5.2.png"
import blogImg6 from "../../../public/assets/images/blog/6.2.png"
import blogImg7 from "../../../public/assets/images/blog/7.2.png"
 
 
import blogImg8 from "../../../public/assets/images/blog/8.2.png"
import blogImg9 from "../../../public/assets/images/blog/9.2.png"
import blogImg10 from "../../../public/assets/images/blog/10.2.png"
import blogImg11 from "../../../public/assets/images/blog/11.2.png"
import blogImg12 from "../../../public/assets/images/blog/12.2.png"

import blogImg13 from "../../../public/assets/images/blog/13.2.png"
import blogImg14 from "../../../public/assets/images/blog/14.2.png"
import blogImg15 from "../../../public/assets/images/blog/15.2.png"
import blogImg16 from "../../../public/assets/images/blog/16.2.png"

 




import listimg1 from "../../../public/assets/images/blog/blog-list-1-1.jpg";
import listimg7 from "../../../public/assets/images/blog/blog-list-client-img-1.jpg";
import listimg2 from "../../../public/assets/images/blog/blog-list-1-2.jpg";
import listimg6 from "../../../public/assets/images/blog/blog-list-client-img-2.jpg";
import listimg4 from "../../../public/assets/images/blog/blog-list-1-3.jpg";
import listimg5 from "../../../public/assets/images/blog/blog-list-client-img-4.jpg";
import { BlogPost } from "@/types/blog-list"

// export const Allblogs: Blog[] = [
//     {
//         id: 1,
//         image: blogImg1,
//         date: {
//             day: "05",
//             month: "NOV"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Sparkling",
//         },
//         title: "10 Simple Cleaning Hacks for a Spotless Home",
//         text: "Discover quick and effective cleaning tips to keep your home sparkling"
//     },
//     {
//         id: 2,
//         image: blogImg2,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Moping",
//             link2: "Sparkling",
//         },
//         title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
//         text: "Explore how a clean workplace boosts productivity, impresses clients"
//     },
//     {
//         id: 3,
//         image: blogImg3,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Moping",
//         },
//         title: "How Our Cleaning Agency Makes a Difference",
//         text: "A behind-the-scenes look at how a professional transforms messy spaces"
//     },
//     {
//         id: 4,
//         image: blogImg4,
//         date: {
//             day: "30",
//             month: "DEC"
//         },
//         links: {
//             link1: "Sparkling",
//             link2: "Moping",
//         },
//         title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
//         text: "Learn when DIY cleaning falls short and why professional services"
//     },
//     {
//         id: 5,
//         image: blogImg5,
//         date: {
//             day: "05",
//             month: "NOV"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Sparkling",
//         },
//         title: "10 Simple Cleaning Hacks for a Spotless Home",
//         text: "Discover quick and effective cleaning tips to keep your home sparkling"
//     },
//     {
//         id: 6,
//         image: blogImg6,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Moping",
//             link2: "Sparkling",
//         },
//         title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
//         text: "Explore how a clean workplace boosts productivity, impresses clients"
//     },
//     {
//         id: 7,
//         image: blogImg7,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Moping",
//         },
//         title: "How Our Cleaning Agency Makes a Difference",
//         text: "A behind-the-scenes look at how cleaning team transforms messy spaces"
//     },
//     {
//         id: 7,
//         image: blogImg8,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Moping",
//         },
//         title: "How Our Cleaning Agency Makes a Difference",
//         text: "A behind-the-scenes look at how cleaning team transforms messy spaces"
//     },
//     {
//         id: 8,
//         image: blogImg9,
//         date: {
//             day: "30",
//             month: "DEC"
//         },
//         links: {
//             link1: "Sparkling",
//             link2: "Moping",
//         },
//         title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
//         text: "Learn when DIY cleaning falls short and why professional services"
//     },
//     {
//         id: 9,
//         image: blogImg10,
//         date: {
//             day: "05",
//             month: "NOV"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Sparkling",
//         },
//         title: "10 Simple Cleaning Hacks for a Spotless Home",
//         text: "Discover quick and effective cleaning tips to keep your home sparkling"
//     },
//     {
//         id: 10,
//         image: blogImg11,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Moping",
//             link2: "Sparkling",
//         },
//         title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
//         text: "Explore how a clean workplace boosts productivity, impresses clients"
//     },
//     {
//         id: 11,
//         image: blogImg12,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Moping",
//         },
//         title: "How Our Cleaning Agency Makes a Difference",
//         text: "A behind-the-scenes look at how a professional transforms messy spaces"
//     },
//     {
//         id: 12,
//         image: blogImg13,
//         date: {
//             day: "30",
//             month: "DEC"
//         },
//         links: {
//             link1: "Sparkling",
//             link2: "Moping",
//         },
//         title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
//         text: "Learn when DIY cleaning falls short and why professional services"
//     },
//     {
//         id: 13,
//         image: blogImg14,
//         date: {
//             day: "05",
//             month: "NOV"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Sparkling",
//         },
//         title: "10 Simple Cleaning Hacks for a Spotless Home",
//         text: "Discover quick and effective cleaning tips to keep your home sparkling"
//     },
//     {
//         id: 14,
//         image: blogImg15,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Moping",
//             link2: "Sparkling",
//         },
//         title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
//         text: "Explore how a clean workplace boosts productivity, impresses clients"
//     },
//     {
//         id: 7,
//         image: blogImg16,
//         date: {
//             day: "24",
//             month: "APR"
//         },
//         links: {
//             link1: "Cleaning",
//             link2: "Moping",
//         },
//         title: "How Our Cleaning Agency Makes a Difference",
//         text: "A behind-the-scenes look at how cleaning team transforms messy spaces"
//     },
// ]


//Blog List Page Content

export const Allblogs: Blog[] = [
    {
        id: 1,
        image: blogImg1,
        date: { day: "05", month: "NOV" },
        links: {
            link1: "Home Cleaning",
            link2: "Healthy Living",
        },
        title: "Why Regular Home Cleaning Improves Your Quality of Life",
        text: "Consistent home cleaning creates healthier living spaces, reduces stress, and improves daily comfort for families and professionals."
    },
    {
        id: 2,
        image: blogImg2,
        date: { day: "24", month: "APR" },
        links: {
            link1: "End of Lease",
            link2: "Bond Cleaning",
        },
        title: "End of Lease Cleaning: Secure Your Bond with Confidence",
        text: "Professional end-of-lease cleaning helps tenants meet inspection standards and avoid bond disputes."
    },
    {
        id: 3,
        image: blogImg3,
        date: { day: "12", month: "MAR" },
        links: {
            link1: "Kitchen Cleaning",
            link2: "Home Hygiene",
        },
        title: "Kitchen Hygiene: Where Cleanliness Meets Health",
        text: "Deep kitchen cleaning removes grease, bacteria, and hidden contaminants that affect food safety."
    },
    {
        id: 4,
        image: blogImg4,
        date: { day: "18", month: "FEB" },
        links: {
            link1: "Bathroom Cleaning",
            link2: "Sanitised Spaces",
        },
        title: "Bathroom Cleaning: More Than Just Visual Cleanliness",
        text: "Sanitised bathrooms protect your family from bacteria, mold, and harmful germs."
    },
    {
        id: 5,
        image: blogImg5,
        date: { day: "07", month: "JAN" },
        links: {
            link1: "Living Area Cleaning",
            link2: "Healthy Home",
        },
        title: "Bedroom & Living Area Cleaning for Healthier Homes",
        text: "Clean living spaces improve sleep quality, comfort, and overall wellbeing."
    },
    {
        id: 6,
        image: blogImg6,
        date: { day: "22", month: "MAY" },
        links: {
            link1: "Carpet Cleaning",
            link2: "Steam Cleaning",
        },
        title: "Why Carpet Steam Cleaning Is Essential for Healthy Homes",
        text: "Steam cleaning removes allergens, bacteria, and deep-seated dirt from carpets."
    },
    {
        id: 7,
        image: blogImg7,
        date: { day: "09", month: "JUN" },
        links: {
            link1: "Mattress Cleaning",
            link2: "Allergy Free",
        },
        title: "The Benefits of Professional Mattress Cleaning",
        text: "Mattress steam cleaning removes dust mites, sweat, and allergens for better sleep health."
    },
    {
        id: 8,
        image: blogImg8,
        date: { day: "14", month: "JUL" },
        links: {
            link1: "Upholstery Cleaning",
            link2: "Fresh Interiors",
        },
        title: "Sofa & Upholstery Cleaning: Fresh Comfort Every Day",
        text: "Professional sofa cleaning restores freshness, hygiene, and fabric life."
    },
    {
        id: 9,
        image: blogImg9,
        date: { day: "03", month: "AUG" },
        links: {
            link1: "Rug Cleaning",
            link2: "Deep Cleaning",
        },
        title: "Carpet & Rug Cleaning: Restore Beauty and Hygiene",
        text: "Deep rug and carpet cleaning removes stains, odors, and bacteria while extending fabric life."
    },
    {
        id: 10,
        image: blogImg10,
        date: { day: "19", month: "SEP" },
        links: {
            link1: "Car Seat Cleaning",
            link2: "Vehicle Hygiene",
        },
        title: "Car Seat Steam Cleaning for Safer Travel",
        text: "Interior steam cleaning removes germs, stains, and odors from car seats for healthier journeys."
    },
    {
        id: 11,
        image: blogImg11,
        date: { day: "30", month: "OCT" },
        links: {
            link1: "Professional Cleaning",
            link2: "Cleaning Experts",
        },
        title: "Why Professional Cleaning Beats DIY Methods",
        text: "Professional cleaning delivers deeper hygiene, longer-lasting results, and better protection for surfaces."
    },
    {
        id: 12,
        image: blogImg12,
        date: { day: "11", month: "DEC" },
        links: {
            link1: "Deep Clean",
            link2: "Indoor Air Quality",
        },
        title: "How Deep Cleaning Improves Indoor Air Quality",
        text: "Removing dust, allergens, and bacteria improves breathing and overall indoor health."
    },
    {
        id: 13,
        image: blogImg13,
        date: { day: "04", month: "JAN" },
        links: {
            link1: "Home Hygiene",
            link2: "Family Health",
        },
        title: "The Role of Hygiene in Family Health",
        text: "Clean environments reduce illness, allergies, and long-term health risks."
    },
    {
        id: 14,
        image: blogImg14,
        date: { day: "16", month: "FEB" },
        links: {
            link1: "Clean Spaces",
            link2: "Wellbeing",
        },
        title: "Why Clean Spaces Improve Mental Wellbeing",
        text: "Clean, organised spaces reduce stress and improve emotional wellbeing."
    },
    {
        id: 15,
        image: blogImg15,
        date: { day: "28", month: "MAR" },
        links: {
            link1: "Eco Clean",
            link2: "Green Cleaning",
        },
        title: "Eco-Friendly Cleaning for Safer Living",
        text: "Sustainable cleaning solutions protect your family, pets, and the environment."
    },
    {
        id: 16,
        image: blogImg16,
        date: { day: "10", month: "APR" },
        links: {
            link1: "Trusted Cleaners",
            link2: "Cleaning Services",
        },
        title: "Choosing the Right Cleaning Partner for Your Home",
        text: "Learn what to look for in a professional cleaning company you can trust long-term."
    },
];


export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 2,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
    {
        id: 3,
        title: "Top 10 Common Cleaning Mistakes to Avoid for a Spotless Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Smith Jhon",
        image1: listimg4,
        image2: listimg5,
        hasImage: true
    },
    {
        id: 4,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 5,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
    {
        id: 6,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 7,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
];


