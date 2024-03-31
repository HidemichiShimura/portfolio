import type { Meta, StoryObj } from "@storybook/react";
import { Intro } from "@/ui";

const meta: Meta<typeof Intro> = {
  title: "design system/organisms/Intro",
  component: Intro,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Intro section",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
