import type { Meta, StoryObj } from "@storybook/react";
import GradientCard from "./GradientCard";

const meta: Meta<typeof GradientCard> = {
  title: "atoms/GradientCard",
  component: GradientCard,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex h-20 w-20 items-center justify-center"></div>
    ),
  },
};
