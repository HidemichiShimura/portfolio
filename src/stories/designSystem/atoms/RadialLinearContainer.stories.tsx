import type { Meta, StoryObj } from "@storybook/react";
import { RadialLinearContainer } from "@/ui";

const meta: Meta<typeof RadialLinearContainer> = {
  title: "design system/atoms/RadialLinearContainer",
  component: RadialLinearContainer,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Radial linear container for background",
      },
    },
  },
  argTypes: { children: { description: "contents" } },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="h-96 w-96 text-center" />,
  },
};
