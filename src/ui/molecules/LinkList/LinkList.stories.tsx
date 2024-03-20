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
      description: "Link to github",
    },
    link: {
      control: "text",
      description: "Link to an app page",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    github: "",
  },
};

export const GithubLink: Story = {
  args: {
    github: "",
    link: "example",
  },
};
