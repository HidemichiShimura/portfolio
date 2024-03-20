import type { Meta, StoryObj } from "@storybook/react";
import { HeroHeadings } from "@/ui";

const meta: Meta<typeof HeroHeadings> = {
  title: "molecules/HeroHeadings",
  component: HeroHeadings,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
