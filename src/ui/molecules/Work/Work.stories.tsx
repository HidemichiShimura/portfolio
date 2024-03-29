import type { Meta, StoryObj } from "@storybook/react";
import Work from "./Work";

const meta: Meta<typeof Work> = {
  title: "molecules/Work",
  component: Work,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    name: {
      control: "inline-radio",
      options: ["wt", "cdc", "scb"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WT: Story = { args: { name: "wt" } };

export const CDC: Story = { args: { name: "cdc" } };

export const SCB: Story = { args: { name: "scb" } };
