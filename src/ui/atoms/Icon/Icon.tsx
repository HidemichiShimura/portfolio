import javascript from "/public/images/icons/javascript.svg";
import typescript from "/public/images/icons/typescript.svg";
import sass from "/public/images/icons/sass.svg";
import bootstrap from "/public/images/icons/bootstrap.svg";
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
import mongoose from "/public/images/icons/mongoose.svg";
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

type IconTypes = {
  icon:
    | "javascript"
    | "typescript"
    | "sass"
    | "bootstrap"
    | "tailwind"
    | "react"
    | "nextjs"
    | "materialui"
    | "redux"
    | "jest"
    | "storybook"
    | "node"
    | "express"
    | "mongodb"
    | "mongoose"
    | "postgres"
    | "prisma"
    | "firebase"
    | "git"
    | "github"
    | "webpack"
    | "figma"
    | "mail"
    | "linkedin"
    | "link";
};

export default function Icon({ icon }: IconTypes) {
  const commonClassName = "h-12 w-12 md:h-20 md:w-20";

  switch (icon) {
    case "javascript":
      return <img src={javascript.src} className={commonClassName} />;
    case "typescript":
      return <img src={typescript.src} className={commonClassName} />;
    case "sass":
      return <img src={sass.src} className={commonClassName} />;
    case "bootstrap":
      return <img src={bootstrap.src} className={commonClassName} />;
    case "tailwind":
      return <img src={tailwind.src} className={commonClassName} />;
    case "react":
      return <img src={react.src} className={commonClassName} />;
    case "nextjs":
      return <img src={nextjs.src} className={commonClassName} />;
    case "materialui":
      return <img src={materialui.src} className={commonClassName} />;
    case "redux":
      return <img src={redux.src} className={commonClassName} />;
    case "jest":
      return <img src={jest.src} className={commonClassName} />;
    case "storybook":
      return <img src={storybook.src} className={commonClassName} />;
    case "node":
      return <img src={node.src} className={commonClassName} />;
    case "express":
      return <img src={express.src} className={commonClassName} />;
    case "mongodb":
      return <img src={mongodb.src} className={commonClassName} />;
    case "mongoose":
      return <img src={mongoose.src} className={commonClassName} />;
    case "postgres":
      return <img src={postgres.src} className={commonClassName} />;
    case "prisma":
      return <img src={prisma.src} className={commonClassName} />;
    case "firebase":
      return <img src={firebase.src} className={commonClassName} />;
    case "git":
      return <img src={git.src} className={commonClassName} />;
    case "github":
      return <img src={github.src} className={commonClassName} />;
    case "webpack":
      return <img src={webpack.src} className={commonClassName} />;
    case "figma":
      return <img src={figma.src} className={commonClassName} />;
    case "mail":
      return <img src={mail.src} className={commonClassName} />;
    case "linkedin":
      return <img src={linkedin.src} className={commonClassName} />;
    case "link":
      return <img src={link.src} className={commonClassName} />;
    default:
  }
}
