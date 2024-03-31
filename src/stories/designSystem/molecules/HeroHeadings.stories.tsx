import type { Meta, StoryObj } from "@storybook/react";
import { HeroHeadings } from "@/ui";

const meta: Meta<typeof HeroHeadings> = {
  title: "design system/molecules/HeroHeadings",
  component: HeroHeadings,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Headings in the Hero section",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
