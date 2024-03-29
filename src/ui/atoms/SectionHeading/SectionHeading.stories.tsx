import { Meta, StoryObj } from "@storybook/react";
import SectionHeading from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "Text of section heading" },
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
