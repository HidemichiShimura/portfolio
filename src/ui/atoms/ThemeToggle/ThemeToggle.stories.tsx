import type { Meta, StoryObj } from "@storybook/react";
import ThemeToggle from "./ThemeToggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "atoms/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    theme: {
      control: "inline-radio",
      options: ["dark", "light"],
    },
    onClick: {},
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
