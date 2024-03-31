import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "@/ui";

const meta: Meta<typeof Home> = {
  title: "design system/pages/Home",
  component: Home,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "The entire page",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
