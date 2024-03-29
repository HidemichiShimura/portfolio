import type { Meta, StoryObj } from "@storybook/react";
import Works from "./Works";

const meta: Meta<typeof Works> = {
  title: "organisms/Works",
  component: Works,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
