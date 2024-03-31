import { Meta, StoryObj } from "@storybook/react";
import { PageHeading } from "@/ui";

const meta: Meta<typeof PageHeading> = {
  title: "design system/atoms/PageHeading",
  component: PageHeading,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: ["main", "sub"],
      },
      description:
        "`main` for the author name and `sub` for job titles and other texts",
    },
    children: { control: "text", description: "Heading text" },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Headngs in 60sSTRIPE fonts",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3rem", textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export const Main: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: "main",
  },
};

export const Sub: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: "sub",
  },
};
