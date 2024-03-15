import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
