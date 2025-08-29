import {
  Home,
  User,
  Briefcase,
  Code2,
  FileText,
  Mail,
  CircleAlert,
  LucideIcon,
} from "lucide-react";

type MenuItemType = {
  title: string;
  url: string;
  external?: string;
  icon?: LucideIcon;
  items?: MenuItemType[];
};
type MenuType = MenuItemType[];

export const mainMenu: MenuType = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Briefcase,
    items: [
      {
        title: "Web Apps",
        url: "/projects/web",
      },
      {
        title: "Mobile Apps",
        url: "/projects/mobile",
      },
      {
        title: "Open Source",
        url: "/projects/open-source",
      },
    ],
  },
  {
    title: "Skills",
    url: "/skills",
    icon: Code2,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: FileText,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
  // optional fun / experimental link
  {
    title: "Playground",
    url: "/playground",
    icon: CircleAlert,
  },
];
