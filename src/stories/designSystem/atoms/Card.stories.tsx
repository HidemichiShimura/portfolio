import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/ui";

const meta: Meta<typeof Card> = {
  title: "design system/atoms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Card component with slightly rounded borders",
      },
    },
  },
  argTypes: { children: { description: "Contents inside the card" } },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
