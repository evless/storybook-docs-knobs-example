import React from "react";
import { Preview } from '@storybook/addon-docs/blocks'

import { Button, Props } from ".";

import page from './docs.mdx'

export default {
  title: "components/Button",
  parameters: { docs: { page } },
  includeStories: ['Interactive']
};

export const Interactive = (args: Props) => <Button {...args} />;
Interactive.args = { text: 'Button text' }

export const PreviewWrapper = () => (
  <Preview>
    <Interactive {...Interactive.args} />
  </Preview>
)
