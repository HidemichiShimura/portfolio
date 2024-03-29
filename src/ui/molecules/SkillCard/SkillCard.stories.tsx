import type { Meta, StoryObj } from "@storybook/react";
import SkillCard from "./SkillCard";

const allSkills = [
  "javascript",
  "typescript",
  "sass",
  "bootstrap",
  "tailwind",
  "react",
  "nextjs",
  "materialui",
  "redux",
  "jest",
  "storybook",
  "node",
  "express",
  "mongodb",
  "mongoose",
  "postgres",
  "prisma",
  "firebase",
  "git",
  "github",
  "webpack",
  "figma",
];

const meta: Meta<typeof SkillCard> = {
  title: "molecules/SkillCard",
  component: SkillCard,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    heading: {
      control: "string",
    },
    list: {
      control: "check",
      options: allSkills,
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
