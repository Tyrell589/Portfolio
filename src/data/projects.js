import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoWordpress, BiLogoTailwindCss, BiLogoTypescript, BiLogoShopify, BiLogoJavascript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress, SiSupabase } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Modern E-commerce Platform",
    image: "./SHOP.CO.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "SHOP.CO is designed to offer a high-end e-commerce experience with a modern UI and smooth navigation.",
    github: "https://github.com/Tyrell589/IMDB",
    demo: "https://shopco-hassanrj.vercel.app/",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/Tyrell589/Ecommerce-Demo",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  {
    id: "3",
    name: "Inoqare Health Service",
    image: "./innqare.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "Inoqare is a premier healthcare service offering seamless access to world-class medical care, ensuring you receive top-quality treatment promptly and efficiently.",
    github: "",
    demo: "https://inoqare.com/",
  },
  {
    id: "4",
    name: "Lunalemon",
    image: "./shopify_1.png",
    icons: [ BiLogoShopify, BiLogoTypescript],
    description: "Headless Web agency site utilizing Shopify's theme editor as a custom CMS. The site showcases my client oriented projects and promotes web development services.",
    github: "",
    demo: "https://kidsliving.co.za/",
  },
  {
    id: "5",
    name: "Health Care Web application",
    image: "./health.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "Dynamic Health is a patient health monitoring platform to create, keep and track patient medical records and checkups history",
    github: "",
    demo: "",
  },
  {
    id: "6",
    name: "The Meal Prep Co",
    image: "./Screenshot_2.png",
    icons: [ BiLogoWordpress],
    description: "Built on WordPress, the site offers a seamless user experience with features like weekly rotating menus, easy meal customization, location-based delivery info, and subscription options.",
    github: "",
    demo: "https://themealprepco.com",
  },
  {
    id: "7",
    name: "CoinEcho",
    image: "./CoinEcho.png",
    icons: [ BiLogoReact, BiLogoTypescript, BiLogoFirebase],
    description: "Get AI insights and stay ahead in the fast-moving world of digital assets with real-time cryptocurrency updates and analysis.",
    github: "",
    demo: "https://coinecho.pages.dev/",
  },
  {
    id: "8",
    name: "The wild Oasis Admin",
    image: "./wild oasis.png",
    icons: [ BiLogoReact, BiLogoJavascript, BiLogoTailwindCss],
    description: "An admin dashboard to manage the wild oasis hotel reservations website",
    github: "https://github.com/Tyrell589/the-wild-oasis",
    demo: "https://the-wild-oasis-nevo.vercel.app/",
  },
  {
    id: "9",
    name: "The wild Oasis",
    image: "./wild oasis_user.png",
    icons: [ BiLogoReact, BiLogoJavascript, BiLogoTailwindCss, SiSupabase],
    description: "A hotel reservations website",
    github: "https://github.com/Tyrell589/the-wild-oasis-website",
    demo: "https://nevo-the-wild-oasis-website.vercel.app/",
  },
];

export default ProjectsData;
