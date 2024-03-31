import type { Meta, StoryObj } from "@storybook/react";
import { Works } from "@/ui";

const meta: Meta<typeof Works> = {
  title: "design system/organisms/Works",
  component: Works,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Works section",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
