import type { Meta, StoryObj } from "@storybook/react";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "atoms/Grid",
  component: Grid,
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
      <div className="flex h-screen w-screen items-center justify-center">
        <p>iorgjariog</p>
      </div>
    ),
  },
};
