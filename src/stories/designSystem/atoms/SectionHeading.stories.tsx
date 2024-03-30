import { Meta, StoryObj } from "@storybook/react";
import { SectionHeading } from "@/ui";

const meta: Meta<typeof SectionHeading> = {
  title: "design system/atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "Text" },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Section heading with the vertical gradient colors that change to the current theme",
      },
    },
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Skills: Story = {
  args: {
    children: "Skills",
  },
};

export const Works: Story = {
  args: {
    children: "Works",
  },
};
