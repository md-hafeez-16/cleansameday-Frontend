const BASE_URL = import.meta.env.VITE_APP_BASE_URL;






import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
import SpaceCity1 from "../assets/images/clean.jpg";
import SpaceCity5 from "../assets/images/clean1.jpg";
import SpaceCity6 from "../assets/images/clean2.jpg";
import SpaceCity7 from "../assets/images/clean3.jpg";
import SpaceCity8 from "../assets/images/clean2.jpg";
import SpaceCity9 from "../assets/images/clean.jpg";
export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity9,
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity1,
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity6,
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity7,
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity5,
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity8,
  },
];


export { BASE_URL };

