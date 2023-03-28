import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";

import AboutHeadSection from "../components/AboutHeadSection/AboutHeadSection";
import AboutHeadSectionOptions from "../components/AboutHeadSection/AboutHeadSectionOptions";
import AboutHeadSectionPreview from "../components/AboutHeadSection/AboutHeadSectionPreview.png";

import AboutHeadImages from "../components/AboutHeadImages/AboutHeadImages";
import AboutHeadImagesOptions from "../components/AboutHeadImages/AboutHeadImagesOptions";
import AboutHeadImagesPreview from "../components/AboutHeadImages/AboutHeadImagesPreview.png";
import image1 from "../components/AboutHeadImages/aboutImage1.svg";
import image2 from "../components/AboutHeadImages/aboutImage2.svg";
import image3 from "../components/AboutHeadImages/aboutImage3.svg";
import image4 from "../components/AboutHeadImages/aboutImage4.svg";


import ServiceWrapper from "../components/ServiceWrapper/ServiceWrapper";
import ServiceWrapperPreview from "../components/ServiceWrapper/ServiceWrapperPreview.png";
import ServiceWrapperOptions from "../components/ServiceWrapper/ServiceWrapperOptions";
import {BannerComponent} from '../components/Banner/BannerComponent';
import StatsWrapper from "../components/StatsWrapper/StatsWrapper";
import StatsWrapperOptions from "../components/StatsWrapper/StatsWrapperOptions";
import StatsWrapperPreview from "../components/StatsWrapper/StatsWrapperPreview.png";
import EducationWorkExperience from "../components/EducationAndWork/EducationAndWork";
import EducationWorkExperienceOptions from "../components/EducationAndWork/EducationAndWorkOptions";
import EducationWorkExperiencePreview from "../components/EducationAndWork/EducationAndWorkDark.png";
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";

import Component from "../models/Component";
import { Gradients } from "./utils";
import CtaSection from "../components/CtaSection/CtaSection";
import CtaSectionOptions from "../components/CtaSection/CtaSectionOptions";
import CtaSectionPreview from "../components/CtaSection/CtaSectionPreview.png";

export const registeredComponents = new Map([

    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['AboutHeadSection', new Component('AboutHeadSection', AboutHeadSection, AboutHeadSectionOptions, AboutHeadSectionPreview, 
        {   name: 'Kartik Bansal', 
            gradient: Gradients.default,
            description: `Over the past 12 years, I\'ve worked with a diverse range of clients, from startups to Fortune 500 companies. 
                            I love crafting interfaces that delight users and help businesses grow.`
        })
    ],
    ['AboutHeadImages', new Component('AboutHeadImages', AboutHeadImages, AboutHeadImagesOptions, AboutHeadImagesPreview, 
        {   image1: {image1}, 
            image2: {image2},
            image3: {image3},
            image4: {image4}

        })
    ],
    ['Service Wrapper', new Component('Service Wrapper', ServiceWrapper, ServiceWrapperOptions, ServiceWrapperPreview, {Title: 'Web Design', Text: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m", ButtonText: "Contact Me", ButtonLink: "https://www.google.com/", gradient: Gradients.default, ImageLink: "https://i.imgur.com/0vBgKva.jpeg", Invert: "Image Left"})],
    ['Banner', BannerComponent],
    ['Stats Section', new Component('Stats Section', StatsWrapper, StatsWrapperOptions, StatsWrapperPreview, {stats: [{number: "12+", text: "Years of Experience in Design"},{number: "100+", text: "Successfully Completed Projects"},{number: "50+", text: "Global Customers"}], gradient: Gradients.default})],
    ['CtaSection', new Component('CtaSection', CtaSection, CtaSectionOptions, CtaSectionPreview, {link: "https://www.google.com/", word1: "See the impact of good, conversion-oriented design on your business.", word2: "Let's Work Together", gradient: Gradients.default})],
    [
        'Education and Work',
        new Component(
          'Education and Work',
          EducationWorkExperience,
          EducationWorkExperienceOptions,
          EducationWorkExperiencePreview,
          {
            school1: 'School 1; Degree; Date',
            school2: 'School 2; Degree; Date',
            school3: 'School 3; Degree; Date',
            job1: 'Company 1; Title; Date',
            job2: 'Company 2; Title; Date',
            job3: 'Company 3; Title; Date',
            gradient: Gradients.default
          }
        )
    ],
    [
      'Skills',
      new Component(
        'Skills',
        Skills,
        SkillsOptions,
        SkillsPreview,
        {
          title: 'What I Do.',
          skillsList: [
            {name: "Figma", files:  "", image: "/src/components/Skills/SampleLogos/figma.png"},
            {name: "Photoshop", files:  "", image: "/src/components/Skills/SampleLogos/photoshop.png"},
            {name: "HTML", files:  "", image: "/src/components/Skills/SampleLogos/html.png"},
            {name: "Webflow", files:  "", image: "/src/components/Skills/SampleLogos/webflow.png"},
            {name: "SEQ", files:  "", image: "/src/components/Skills/SampleLogos/seo.png"}
          ]
        }
      )
    ]
]);