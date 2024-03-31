import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/ui";

const ICONS = [
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
  "mail",
  "linkedin",
  "link",
];

const meta: Meta<typeof Icon> = {
  title: "design system/atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Dev icons and general icons",
      },
    },
  },
  argTypes: {
    icon: {
      control: "select",
      options: ICONS,
      description: "Icon name",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Javascript: Story = {
  args: {
    icon: "javascript",
  },
};

export const Typescript: Story = {
  args: {
    icon: "typescript",
  },
};

export const Sass: Story = {
  args: {
    icon: "sass",
  },
};

export const Tailwind: Story = {
  args: {
    icon: "tailwind",
  },
};

export const React: Story = {
  args: {
    icon: "react",
  },
};

export const Nextjs: Story = {
  args: {
    icon: "nextjs",
  },
};

export const Materialui: Story = {
  args: {
    icon: "materialui",
  },
};

export const Redux: Story = {
  args: {
    icon: "redux",
  },
};

export const Jest: Story = {
  args: {
    icon: "jest",
  },
};

export const Storybook: Story = {
  args: {
    icon: "storybook",
  },
};

export const Node: Story = {
  args: {
    icon: "node",
  },
};

export const Express: Story = {
  args: {
    icon: "express",
  },
};

export const MongoDB: Story = {
  args: {
    icon: "mongodb",
  },
};

export const Mongoose: Story = {
  args: {
    icon: "mongoose",
  },
};

export const Postgres: Story = {
  args: {
    icon: "postgres",
  },
};

export const Prisma: Story = {
  args: {
    icon: "prisma",
  },
};

export const Firebase: Story = {
  args: {
    icon: "firebase",
  },
};

export const Git: Story = {
  args: {
    icon: "git",
  },
};

export const GitHub: Story = {
  args: {
    icon: "github",
  },
};

export const Webpack: Story = {
  args: {
    icon: "webpack",
  },
};

export const Figma: Story = {
  args: {
    icon: "figma",
  },
};

export const Mail: Story = {
  args: {
    icon: "mail",
  },
};

export const LinkedIn: Story = {
  args: {
    icon: "linkedin",
  },
};

export const Link: Story = {
  args: {
    icon: "link",
  },
};
