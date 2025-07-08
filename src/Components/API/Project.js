import PDImg from '../assets/project-one-cover-image.png';
import PDSearchFilter from '../assets/search-functionality-clip.mp4';
import PDProductImagePopupSlider from '../assets/product-page-image-popup-slider.mp4';
import PDZoomMiror from '../assets/product-page-zoom-miror-functionality.mp4';
import SoftStudioServicePage from '../assets/services-page-project-two.mp4';
import CMSDashboard from '../assets/cms-dashboard-clip.mp4';

const data = [
  {
    name: 'Pondesk',
    description:
      'Redesigned the entire Pondesk website frontend from scratch as the sole developer, delivering a fully responsive, high-performance interface. Focused on usability, accessibility, and brand-aligned visual appeal to simplify customer support management for businesses, while implementing modern web technologies for seamless functionality and smooth navigation.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.pondesk.com/',
    moreDetail: [
      {
        moreInfo:
          'Redesigned the entire Pondesk website frontend from scratch as the sole developer, delivering a fully responsive, high-performance interface. Focused on usability, accessibility, and brand-aligned visual appeal to simplify customer support management for businesses, while implementing modern web technologies for seamless functionality and smooth navigation.',
        moreDetail: PDImg,
      },
      {
        moreInfo:
          'Developed key functionalities, including a dynamic search filter, using JavaScript—demonstrated clearly in the video above for enhanced user interaction and efficiency.',
        moreDetail: PDSearchFilter,
      },
      {
        moreInfo:
          'Implemented a product image popup slider, as shown in the video, enhancing user experience by allowing detailed viewing on product pages.',
        moreDetail: PDProductImagePopupSlider,
      },
      {
        moreInfo:
          'Integrated a zoom and mirror functionality for product images, as demonstrated in the video, to provide users with an interactive and detailed view of products.',
        moreDetail: PDZoomMiror,
      },
    ],
  },
  {
    name: 'Soft Studios',
    description:
      'Redesigned the service pages and updated the overall styling of the SoftStudio website to create a cohesive, modern look. Improved responsiveness across devices, ensuring a consistent and professional appearance that enhanced visual appeal and better showcased the platform’s specialized engineering services.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://softstudios.co.uk/service',
    moreDetail: [
      {
        moreInfo:
          'Developed and enhanced the styling of the SoftStudio website, focusing on the design services pages to create a polished, professional look. Improved overall visual consistency and user experience for this e-commerce platform that showcases and offers specialized engineering-related services, boosting engagement and brand appeal.',
        moreDetail: SoftStudioServicePage,
      },
    ],
  },

  {
    name: 'CMS Dashboard',
    description:
      'This dashboard was built for a CMS-based eCommerce platform to efficiently manage sales and overall operations. It features interactive graphs, advanced search filtering, dark and light mode toggling, and a responsive, mobile-friendly design—ensuring a smooth user experience across devices while offering full control over key business metrics.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://atril33.github.io/cms-dashbaord/',
    moreDetail: [
      {
        moreInfo:
          'This dashboard was built for a CMS-based eCommerce platform to efficiently manage sales and overall operations. It features interactive graphs, advanced search filtering, dark and light mode toggling, and a responsive, mobile-friendly design—ensuring a smooth user experience across devices while offering full control over key business metrics.',
        moreDetail: CMSDashboard,
      },
    ],
  },
];

export default data;
