import type { Meta, StoryObj } from "@storybook/react";
import { LinkList } from "@/ui";

const meta: Meta<typeof LinkList> = {
  title: "molecules/LinkList",
  component: LinkList,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    github: {
      control: "text",
      description: "Link to GitHub",
    },
    link: {
      control: "text",
      description: "Link to an app page",
    },
    mail: {
      control: "text",
      description: "Link to email",
    },
    linkedin: {
      control: "text",
      description: "Link to a Linkedin page",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Github: Story = {
  args: {
    github: "example",
  },
};

export const Link: Story = {
  args: {
    link: "example",
  },
};

export const Mail: Story = {
  args: {
    mail: "example",
  },
};

export const Linkedin: Story = {
  args: {
    linkedin: "example",
  },
};

export const Work: Story = {
  args: {
    github: "example",
    link: "example",
  },
};

export const Footer: Story = {
  args: {
    mail: "example",
    linkedin: "example",
  },
};
