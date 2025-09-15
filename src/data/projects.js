import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript, BiLogoShopify } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

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
    image: "./crm system_3.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "Dynamic Health is a patient health monitoring platform to create, keep and track patient medical records and checkups history",
    github: "",
    demo: "",
  },
  {
    id: "8",
    name: "Blog Application",
    image: "./blog-app.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
    demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
