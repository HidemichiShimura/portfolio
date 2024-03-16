import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "atoms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
