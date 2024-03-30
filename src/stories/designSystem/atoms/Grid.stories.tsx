import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@/ui";

const meta: Meta<typeof Grid> = {
  title: "design system/atoms/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "A container component with a grid background",
      },
    },
  },
  argTypes: { children: { description: "Contents on the grid background" } },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex h-screen w-screen items-center justify-center">
        <p>children</p>
      </div>
    ),
  },
};
