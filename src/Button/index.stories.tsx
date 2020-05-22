import React from "react";
import { Preview } from '@storybook/addon-docs/blocks'
import { text } from '@storybook/addon-knobs'

import { Button } from ".";

import page from './docs.mdx'

export default {
  title: "components/Button",
  parameters: { docs: { page } },
  includeStories: ['Interactive']
};

export const Interactive = () => <Button text={text('text', 'Button text')} />;

export const PreviewWrapper = () => (
  <Preview>
    <Interactive />
  </Preview>
)
