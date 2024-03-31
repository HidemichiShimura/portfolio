import type { Meta, StoryObj } from "@storybook/react";
import { LinkList } from "@/ui";

const meta: Meta<typeof LinkList> = {
  title: "design system/molecules/LinkList",
  component: LinkList,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Multiple general link items",
      },
    },
    layout: "centered",
  },
  argTypes: {
    github: {
      control: "text",
      description: "My GitHub profile URL",
    },
    link: {
      control: "text",
      description: "App page URL",
    },
    mail: {
      control: "text",
      description: "My email address with a prefix `mailto:`",
    },
    linkedin: {
      control: "text",
      description: "My Linkedin page URL",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Github: Story = {
  args: {
    github: "https://github.com/",
  },
};

export const Link: Story = {
  args: {
    link: "https://www.google.com/",
  },
};

export const Mail: Story = {
  args: {
    mail: "mailto:example@example.com",
  },
};

export const Linkedin: Story = {
  args: {
    linkedin: "https://www.linkedin.com/",
  },
};

export const Work: Story = {
  args: {
    github: Github.args?.github,
    link: Link.args?.link,
  },
};

export const Footer: Story = {
  args: {
    mail: Mail.args?.mail,
    linkedin: Linkedin.args?.linkedin,
  },
};
