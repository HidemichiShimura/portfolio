import type { Meta, StoryObj } from "@storybook/react";
import { GradientCard } from "@/ui";

const meta: Meta<typeof GradientCard> = {
  title: "design system/atoms/GradientCard",
  component: GradientCard,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Card component with diagonal purple gradient on the background",
      },
    },
  },
  argTypes: { children: { description: "Contents inside the card" } },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="flex h-20 w-20 items-center justify-center" />,
  },
};
