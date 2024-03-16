import type { Meta, StoryObj } from "@storybook/react";
import RadialLinearContainer from "./RadialLinearContainer";

const meta: Meta<typeof RadialLinearContainer> = {
  title: "molecules/RadialLinearContainer",
  component: RadialLinearContainer,
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
    children: <p className="text-neutral-100">Children</p>,
  },
};
