import type { Meta, StoryObj } from "@storybook/react";
import { Skills } from "@/ui";

const meta: Meta<typeof Skills> = {
  title: "design system/organisms/Skills",
  component: Skills,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Skills section",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
