import { Meta, StoryObj } from "@storybook/react";
import PageHeading from "./PageHeading";

const meta: Meta<typeof PageHeading> = {
  title: "atoms/PageHeading",
  component: PageHeading,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: ["main", "sub"],
      },
      description:
        "Styled headngs of the hero section, 'main' for the author name and 'sub' for job titles and others",
    },
    children: { control: "text", description: "Heading text" },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hidemichi Shimura",
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
