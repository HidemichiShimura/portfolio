import type { Meta, StoryObj } from "@storybook/react";
import { SkillCard } from "@/ui";

const allSkills = [
  "javascript",
  "typescript",
  "sass",
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
  title: "design system/molecules/SkillCard",
  component: SkillCard,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "A skill card with a purple gradient background",
      },
    },
  },
  argTypes: {
    heading: {
      control: "string",
      description: "A skill category",
    },
    list: {
      control: "check",
      options: allSkills,
      description: "Skills",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Languages: Story = {
  args: {
    heading: "Languages",
    list: ["javascript", "typescript"],
  },
};

export const Frontend: Story = {
  args: {
    heading: "Frontend",
    list: [
      "sass",
      "tailwind",
      "react",
      "nextjs",
      "materialui",
      "redux",
      "jest",
      "storybook",
    ],
  },
};

export const Backend: Story = {
  args: {
    heading: "Backend",
    list: [
      "node",
      "express",
      "mongodb",
      "mongoose",
      "postgres",
      "prisma",
      "firebase",
    ],
  },
};

export const Tools: Story = {
  args: {
    heading: "Tools",
    list: ["git", "github", "webpack", "figma"],
  },
};
