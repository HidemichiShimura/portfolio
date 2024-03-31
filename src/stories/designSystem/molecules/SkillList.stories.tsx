import type { Meta, StoryObj } from "@storybook/react";
import { SkillList } from "@/ui";

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

const meta: Meta<typeof SkillList> = {
  title: "design system/molecules/SkillList",
  component: SkillList,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "A skill set",
      },
    },
  },
  argTypes: {
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
  args: { list: ["javascript", "typescript"] },
};

export const Frontend: Story = {
  args: {
    list: [
      "sass",
      "bootstrap",
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
    list: ["git", "github", "webpack", "figma"],
  },
};
