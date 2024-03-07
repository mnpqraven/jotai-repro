import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

/**
 * # Button stories
 * These stories showcase the button
 */
const meta = {
  title: "Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    asChild: false,
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;

export const Warning = {
  args: {
    variant: "destructive",
    children: "this is a warning <Button />",
  },
} satisfies Story;

export const VariantAndSize = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "this is a secondary <Button /> with custom size",
  },
} satisfies Story;

export const CustomClassName = {
  args: {
    variant: "secondary",
    className: "h-24 w-1/2",
    children:
      "You can still mix and match with your own tailwind class to the <Button />",
  },
} satisfies Story;
