import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/ui";

const meta: Meta<typeof Hero> = {
  title: "design system/organisms/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Hero section",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
