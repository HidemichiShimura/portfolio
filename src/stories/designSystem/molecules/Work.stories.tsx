import type { Meta, StoryObj } from "@storybook/react";
import { Work } from "@/ui";

const meta: Meta<typeof Work> = {
  title: "design system/molecules/Work",
  component: Work,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Work in the Works section",
      },
    },
  },
  argTypes: {
    name: {
      control: "inline-radio",
      options: ["wt", "cdc", "scb", "pf"],
      description: "Name of the work",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WeightTracker: Story = { args: { name: "wt" } };

export const CafeDrinkCustomizer: Story = { args: { name: "cdc" } };

export const SlackCocktailBot: Story = { args: { name: "scb" } };

export const Portfolio: Story = { args: { name: "pf" } };
