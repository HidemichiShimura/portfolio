import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
        options: ["gray", "white"],
      },
      description: "Color of the text",
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
      description: "Size of the text",
    },
    children: {
      control: {
        type: "text",
      },
      description: "Text to be displayed",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3rem", textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export const Gray: Story = {
  ...Default,
};

export const White: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "white",
  },
};
