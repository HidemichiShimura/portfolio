import type { Meta, StoryObj } from "@storybook/react";
import { Template, Hero, Intro } from "@/ui";

const meta: Meta<typeof Template> = {
  title: "templates/Template",
  component: Template,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    hero: {
      control: "object",
    },
    content: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { hero: <Hero />, content: <Intro /> } };
