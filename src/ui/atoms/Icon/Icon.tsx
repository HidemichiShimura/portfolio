import javascript from "/public/images/icons/javascript.svg";
import typescript from "/public/images/icons/typescript.svg";
import sass from "/public/images/icons/sass.svg";
import tailwind from "/public/images/icons/tailwindcss.svg";
import react from "/public/images/icons/react.svg";
import nextjs from "/public/images/icons/nextjs.svg";
import materialui from "/public/images/icons/materialui.svg";
import redux from "/public/images/icons/redux.svg";
import jest from "/public/images/icons/jest.svg";
import storybook from "/public/images/icons/storybook.svg";
import node from "/public/images/icons/nodejs.svg";
import express from "/public/images/icons/express.svg";
import mongodb from "/public/images/icons/mongodb.svg";
import postgres from "/public/images/icons/postgresql.svg";
import prisma from "/public/images/icons/prisma.svg";
import firebase from "/public/images/icons/firebase.svg";
import git from "/public/images/icons/git.svg";
import github from "/public/images/icons/github.svg";
import webpack from "/public/images/icons/webpack.svg";
import figma from "/public/images/icons/figma.svg";
import mail from "/public/images/icons/mail.svg";
import linkedin from "/public/images/icons/linkedin.svg";
import link from "/public/images/icons/link.svg";
import type { Skill } from "@/types";

type Icon = {
  icon: Skill | "mail" | "linkedin" | "link";
};

export default function Icon({ icon }: Icon) {
  switch (icon) {
    case "javascript":
      return <img src={javascript.src} />;
    case "typescript":
      return <img src={typescript.src} />;
    case "sass":
      return <img src={sass.src} />;
    case "tailwind":
      return <img src={tailwind.src} />;
    case "react":
      return <img src={react.src} />;
    case "nextjs":
      return <img src={nextjs.src} className="invert" />;
    case "materialui":
      return <img src={materialui.src} />;
    case "redux":
      return <img src={redux.src} />;
    case "jest":
      return <img src={jest.src} />;
    case "storybook":
      return <img src={storybook.src} />;
    case "node":
      return <img src={node.src} />;
    case "express":
      return <img src={express.src} />;
    case "mongodb":
      return <img src={mongodb.src} />;
    case "postgres":
      return <img src={postgres.src} />;
    case "prisma":
      return <img src={prisma.src} />;
    case "firebase":
      return <img src={firebase.src} />;
    case "git":
      return <img src={git.src} />;
    case "github":
      return <img src={github.src} className="invert" />;
    case "webpack":
      return <img src={webpack.src} />;
    case "figma":
      return <img src={figma.src} />;
    case "mail":
      return <img src={mail.src} className="invert-half" />;
    case "linkedin":
      return <img src={linkedin.src} className="invert-half" />;
    case "link":
      return <img src={link.src} className="invert" />;
    default:
  }
}
