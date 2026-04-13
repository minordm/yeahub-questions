import { type Meta, type StoryObj } from "@storybook/react-vite";
import Button from "./Button.tsx";

const meta: Meta<typeof Button> = {
  title: "Компоненты/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    classnameType: "big",
    children: "Кнопка",
  },
};

export const Small: Story = {
  args: {
    classnameType: "small",
    children: "Кнопка",
  },
};

export const Exit: Story = {
  args: {
    classnameType: "exit",
    children: "Кнопка",
  },
};

export const Nav: Story = {
  name: "Навигация",
  parameters: {
    docs: {
      description: {
        story: "Кнопка навигации",
      },
    },
  },
  args: {
    classnameType: "nav",
    children: "Кнопка",
  },
};
