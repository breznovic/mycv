import { css } from "../assets/icons/css";
import { html } from "../assets/icons/html";
import { js } from "../assets/icons/js";
import { next } from "../assets/icons/next";
import { react } from "../assets/icons/react";
import { ts } from "../assets/icons/ts";

type Skill = {
  id: number;
  title: string;
  icon: React.ReactElement<string, string>;
  description: string;
};

export const skillsData: Skill[] = [
  {
    id: 1,
    title: "HTML",
    icon: html,
    description:
      "Proficient in structuring web content using semantic HTML elements",
  },
  {
    id: 2,
    title: "CSS",
    icon: css,
    description:
      "Skilled in styling and layout techniques to enhance user interfaces",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: js,
    description:
      "Experienced in building interactive web apps and adding dynamic behavior to websites",
  },
  {
    id: 4,
    title: "TypeScript",
    icon: ts,
    description:
      "Knowledgeable in using TypeScript for type-safe JavaScript development",
  },
  {
    id: 5,
    title: "React",
    icon: react,
    description:
      "Proficient in building reusable UI components and managing state in React applications",
  },
  {
    id: 6,
    title: "Next.js",
    icon: next,
    description:
      "Experienced in building server-rendered React applications with Next.js",
  },
];


