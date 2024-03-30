import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "@/ui";

const meta: Meta<typeof ThemeToggle> = {
  title: "design system/atoms/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Theme switcher to `dark` or `light`",
      },
    },
  },
  argTypes: {
    theme: {
      control: "inline-radio",
      options: ["dark", "light"],
      description: "Theme over the entire page",
    },
    onClick: { description: "Theme toggle funciton" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  ...Default,
  args: { theme: "dark" },
};

export const Light: Story = {
  ...Default,
  args: { theme: "light" },
};
