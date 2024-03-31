import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/ui";

const meta: Meta<typeof Footer> = {
  title: "design system/organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Footer section",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
