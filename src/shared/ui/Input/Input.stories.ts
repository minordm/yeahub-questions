import type { Meta, StoryObj } from "@storybook/react-vite";
import { /*expect,*/ within, fn } from "storybook/test";
import Input from "./Input.tsx";

const meta: Meta<typeof Input> = {
  title: "Компоненты/Input",
  component: Input,
  tags: ["autodocs"],
  args: { onBlur: fn(), onFocus: fn(), onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Simple: Story = {
  args: {
    placeholder: "Имя",
  },
};

export const SimpleFilled: Story = {
  args: {
    placeholder: "Имя",
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("input"), "Алексей");

    // await expect(canvas.getByText("Имя")).toHaveStyle("display: none;");
  },
};
