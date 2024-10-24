import { github } from "../assets/icons/github";
import { mail } from "../assets/icons/mail";
import { tg } from "../assets/icons/tg";
import { location } from "../assets/icons/location";

type Contact = {
  id: number;
  title: string;
  icon: React.ReactElement<string, string>;
  href: string;
  text: string;
};

export const ContactsData: Contact[] = [
  {
    id: 1,
    title: "Telegram",
    icon: tg,
    href: "https://t.me/breznovic",
    text: " @breznovic",
  },
  {
    id: 2,
    title: "Email",
    icon: mail,
    href: "mailto:breznovic@mail.ru",
    text: " breznovic@mail.ru",
  },
  {
    id: 3,
    title: "GitHub",
    icon: github,
    href: "https://github.com/breznovic",
    text: " breznovic",
  },
  {
    id: 4,
    title: "Location",
    icon: location,
    href: "https://www.google.com/maps/place/Moscow,+Russia",
    text: " Moscow",
  },
];
