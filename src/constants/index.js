import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJest,
  SiGit,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

/*
 * Common
 */
export const MEDIA_TABLET = "751px";
export const MEDIA_LAPTOP = "1020px";
export const PROFILE_IMG_SRC = "/assets/profile-img.jpg";
export const NAME = "Hidemichi Shimura";
export const EMAIL = "hidemichi.shimura@gmail.com";
export const CURRENT_YEAR = "2023";
export const JOB_TITLE = "front-end developer";

/*
 * Meta data
 */
export const META_DATA = {
  title: `${NAME} | ${JOB_TITLE}`,
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1.0",
  description: `${NAME}'s portfolio website`,
  keywords:
    "HTML, CSS, JavaScript, React, Next.js, styled-components CSS-in-JS",
  author: NAME,
};

/*
 * Header
 */
export const INTRO = "INTRO";
export const ABOUT = "ABOUT";
export const PROJECTS = "PROJECTS";
export const CONTACT = "CONTACT";

/*
 * Intro
 */
export const INTRO_HEADING = `I'm ${NAME}`;
export const INTRO_DESCRIPTION =
  "Front end developer building websites and web applications with passion and curiosity";

/*
 * About
 */
export const ABOUT_TITLE = "About Me";
export const MY_DESCRIPTION_TITLE = "Who am I?";
export const SELF_INTRODUCTION =
  "I am a self-taught front-end developer with a strong background in HTML, CSS, JavaScript, React, Node.js, and Next.js with experiences as a on-premise IT infrastructure engineer, who has developed logical-thinking, knowledge of servers/network and effective communication skills. I am also a team player who is passionate about coding and always eager to learn new technologies. I work hard in environments where thrive in fast-paced and can adapt quickly to new challenges.";
export const CONTACT_ME_TEXT = "Feel free to hit me up!";
export const MY_SKILLS_TITLE = "My Skills";
export const MY_SKILLS = [
  "html",
  "css",
  "javascript",
  "react",
  "next",
  "node",
  "jest",
  "git",
  "github",
];
export const MY_SKILLS_CAPITALIZED = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  react: "React",
  next: "Next",
  node: "Node",
  jest: "Jest",
  git: "Git",
  github: "GitHub",
};
export const MY_SKILL_ICONS = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  react: <SiReact />,
  next: <SiNextdotjs />,
  node: <SiNodedotjs />,
  jest: <SiJest />,
  git: <SiGit />,
  github: <SiGithub />,
};

/*
 * Projects
 */
export const PROJECTS_TITLE = "Projects";
export const PROJECT_LIST = ["cocktailBot", "portfolio", "cafeDrinkCustomizer"];
export const PROJECT_DETAILS = {
  cocktailBot: {
    name: "Slack Cocktail Bot",
    description:
      "Slack chat bot which suggests a cocktail for Today when the chat bot is mentioned",
    url: "https://github.com/HidemichiShimura/slack-cocktail-bot",
    src: "/assets/cocktail-bot.png",
    alt: "Slack Cocktail Bot thumbnail",
  },
  portfolio: {
    name: "My Portfolio Website",
    description:
      "My portfolio website which is fully responsive and built with Next.js",
    url: "https://github.com/HidemichiShimura/portfolio",
    src: "/assets/portfolio.png",
    alt: "My portfolio website thumbnail",
  },
  cafeDrinkCustomizer: {
    name: "Cafe Drink Customizer",
    description:
      "A web application that helps users to find and customize their favorite cafe drinks with various options as you like",
    url: "https://github.com/HidemichiShimura/cafe-drink-customizer",
    src: "/assets/cafeDrinkCustomizer.png",
    alt: "Cafe Drink Customizer thumbnail",
  },
};

/*
 * Contact
 */
export const CONTACT_TITLE = "Contact";
export const CONTACT_TEXT = "Get in touch with me and I am coming back to you!";
export const SOCIALS = ["gmail", "linkedin", "github", "twitter"];
export const SOCIAL_DETAILS = {
  gmail: {
    href: `mailto:${EMAIL}`,
    icon: <SiGmail />,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/hidemichi-shimura/",
    icon: <SiLinkedin />,
  },
  github: {
    href: "https://github.com/HidemichiShimura",
    icon: <SiGithub />,
  },
  twitter: {
    href: "https://twitter.com/hidemichiinvan",
    icon: <SiTwitter />,
  },
};

/*
 * Footer
 */
export const COPYRIGHT_TEXT = `${CURRENT_YEAR} by ${NAME}. All rights reserved.`;
