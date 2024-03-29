import type { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";

const meta: Meta<typeof Skills> = {
  title: "organisms/Skills",
  component: Skills,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
