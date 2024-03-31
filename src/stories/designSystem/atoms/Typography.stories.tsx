import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@/ui";

const meta: Meta<typeof Typography> = {
  title: "design system/atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
        options: ["gray", "white"],
      },
      description: "Text color",
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
      description: "Text size",
    },
    children: {
      control: {
        type: "text",
      },
      description: "Text",
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Common text used in the page",
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

export const ExtraSmall: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "xs",
  },
};

export const Small: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Medium: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "md",
  },
};

export const Large: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "xl",
  },
};
