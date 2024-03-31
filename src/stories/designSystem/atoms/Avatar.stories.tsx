import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/ui";

const meta: Meta<typeof Avatar> = {
  title: "design system/atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "A component that represents an image of myself",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
