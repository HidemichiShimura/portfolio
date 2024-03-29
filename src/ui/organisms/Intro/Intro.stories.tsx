import type { Meta, StoryObj } from "@storybook/react";
import Intro from "./Intro";

const meta: Meta<typeof Intro> = {
  title: "organisms/Intro",
  component: Intro,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
