import type { Meta, StoryObj } from "@storybook/react";
import { Template, Hero, Intro, Footer } from "@/ui";

const meta: Meta<typeof Template> = {
  title: "design system/templates/Template",
  component: Template,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Page template",
      },
    },
  },
  argTypes: {
    hero: {
      control: "object",
      description: "Hero section",
    },
    content: {
      control: "object",
      description: "Content section with the grid background",
    },
    footer: {
      control: "object",
      description: "Footer section",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { hero: <Hero />, content: <Intro />, footer: <Footer /> },
};
