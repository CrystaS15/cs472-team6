import FourZeroFourSection from './components/404Section/FourZeroFour';
import AboutHeadSection from './components/AboutHeadSection/AboutHeadSection';
import AboutHeadImages from './components/AboutHeadImages/AboutHeadImages';
import Banner from './components/Banner/Banner';
import BlogPage from './components/BlogPage/BlogPage';
// import Companies from './components/Companies/Companies';
import ContactSection from './components/ContactSection/ContactSection';
import EducationWorkExperience from './components/EducationAndWork/EducationAndWork';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavbarComponent/NavbarComponent';
import ServiceWrapper from './components/ServiceWrapper/ServiceWrapper';
import Sm from './components/SocialMedia/SocialMedia';
import StatsWrapper from './components/StatsWrapper/StatsWrapper';
import Testimonial from './components/Testimonial/Testimonial';
import CtaSection from './components/CtaSection/CtaSection';
import Skills from './components/Skills/Skills';
// import faqSection from './components/faqSection/faqSection';
import MoreArticles from './components/MoreArticles/MoreArticles';
import ServicesSection from './components/ServicesSection/ServicesSection';

export const registeredComponents = new Map([
  ['Four Zero Four', FourZeroFourSection],
  ['AboutHeadImages', AboutHeadImages],
  ['AboutHeadSection', AboutHeadSection],
  ['Banner', Banner],
  ['BlogPage', BlogPage],
  // ['Companies', Companies],
  ['ContactSection', ContactSection],
  ['CtaSection', CtaSection],
  ['Education and Work', EducationWorkExperience],
  // ['FAQ', faqSection],
  ['Footer', Footer],
  ['MoreArticles',  MoreArticles],
  ['Navbar', Navbar],
  ['Services Section', ServicesSection],
  ['Service Wrapper', ServiceWrapper],
  ['Skills', Skills],
  ['SocialMedia', Sm],
  ['Stats Section', StatsWrapper],
  ['Testimonial', Testimonial]
]);